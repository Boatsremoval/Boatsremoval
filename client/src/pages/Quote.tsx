import { useState } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const boatSizes = Array.from({ length: 56 }, (_, i) => `${i + 5} ft`);

const engineTypes = [
  "Inboard",
  "Outboard",
  "Sail",
  "Trolling Motor",
  "Other"
];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function Quote() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    boatSize: "",
    engineType: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "Florida",
    zipCode: "",
    phone: "",
    email: "",
    images: [] as File[]
  });

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }

          // Max dimensions to keep file size reasonable
          const MAX_WIDTH = 1920;
          const MAX_HEIGHT = 1920;
          
          let width = img.width;
          let height = img.height;

          // Calculate new dimensions
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = (height * MAX_WIDTH) / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = (width * MAX_HEIGHT) / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Compress to JPEG with quality 0.8
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                });
                resolve(compressedFile);
              } else {
                reject(new Error('Compression failed'));
              }
            },
            'image/jpeg',
            0.8
          );
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 3);
      
      // Check file sizes
      const oversizedFiles = filesArray.filter(f => f.size > 10 * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        toast({
          title: "Image Too Large",
          description: "Please select images under 10MB each.",
          variant: "destructive",
        });
        return;
      }

      try {
        // Compress images
        const compressedImages = await Promise.all(
          filesArray.map(file => compressImage(file))
        );
        setFormData({ ...formData, images: compressedImages });
      } catch (error) {
        console.error('Image compression error:', error);
        toast({
          title: "Image Processing Failed",
          description: "Please try different images.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Convert images to base64
      const imagePromises = formData.images.map(file => {
        return new Promise<{ filename: string; content: string }>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result as string;
            // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
            const base64Content = base64.split(',')[1];
            resolve({
              filename: file.name,
              content: base64Content,
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const images = await Promise.all(imagePromises);

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          boatSize: formData.boatSize,
          engineType: formData.engineType,
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          phone: formData.phone,
          email: formData.email,
          images: images.length > 0 ? images : undefined,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote Request Submitted!",
          description: "We'll contact you within 1 hour with your boat removal quote.",
        });
        setLocation('/');
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };
  const [errors, setErrors] = useState({ phone: "" });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="canonical" href="https://boatsremoval.com/quote" />
      </Helmet>
      <Header />
      <main className="flex-1 pt-20 md:pt-24 pb-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            className="mb-6"
            data-testid="button-back-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Boat Removal Price Quote</CardTitle>
              <CardDescription className="text-base mt-4">
                <strong>Whether we're paying you for a boat, or you're paying us to remove a boat - many factors are considered, and all included in the price:</strong>
              </CardDescription>
              <CardDescription className="text-sm mt-2">
                To Include: Boat Age, Boat Condition, Extraction Difficulty, Hauling Difficulty, Demolition Costs, Waste Fees. 
                If applicable: Resale Costs (Title / Notary, Boat Detailing, Boat Storage).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-muted-foreground">Step 1 of 2</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          data-testid="input-first-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="boatSize">Boat Length *</Label>
                      <Select value={formData.boatSize} onValueChange={(value) => setFormData({ ...formData, boatSize: value })}>
                        <SelectTrigger id="boatSize" data-testid="select-boat-size">
                          <SelectValue placeholder="Select boat length" />
                        </SelectTrigger>
                        <SelectContent>
                          {boatSizes.map((size) => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="engineType">Engine Type (Optional)</Label>
                      <Select value={formData.engineType} onValueChange={(value) => setFormData({ ...formData, engineType: value })}>
                        <SelectTrigger id="engineType" data-testid="select-engine-type">
                          <SelectValue placeholder="Select engine type" />
                        </SelectTrigger>
                        <SelectContent>
                          {engineTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="button" 
                      onClick={handleNext} 
                      className="w-full bg-primary text-primary-foreground"
                      disabled={!formData.firstName || !formData.lastName || !formData.boatSize}
                      data-testid="button-next"
                    >
                      Next
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <Button type="button" variant="ghost" onClick={handleBack} data-testid="button-back">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <p className="text-sm text-muted-foreground">Step 2 of 2</p>
                    </div>

                    <div className="space-y-2">
                      <Label>Address Where Boat Is Located? *</Label>
                      <Input
                        placeholder="Address Line 1"
                        value={formData.addressLine1}
                        onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                        required
                        data-testid="input-address-line1"
                      />
                      <Input
                        placeholder="Address Line 2"
                        value={formData.addressLine2}
                        onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                        data-testid="input-address-line2"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                          data-testid="input-city"
                        />
                        <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                          <SelectTrigger data-testid="select-state">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="Zip Code"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          required
                          data-testid="input-zip"
                        />
                      </div>
                    </div>

                   <div className="space-y-2">
  <Label htmlFor="phone">Phone *</Label>
  <Input
    id="phone"
    type="tel"
    placeholder="(555) 123-4567"
    value={formData.phone}

    onKeyDown={(e) => {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
      ];

      // Allow navigation + deletion
      if (allowedKeys.includes(e.key)) return;

      // Block everything except digits
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }}

    onPaste={(e) => {
      const paste = e.clipboardData.getData("text");
      if (!/^\d+$/.test(paste)) {
        e.preventDefault();
      }
    }}

    onChange={(e) => {
      let digits = e.target.value.replace(/\D/g, "");

      if (digits.length > 10) digits = digits.slice(0, 10);

      let formatted = digits;
      if (digits.length > 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      } else if (digits.length > 3) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else if (digits.length > 0) {
        formatted = `(${digits}`;
      }

      setFormData({ ...formData, phone: formatted });

      setErrors({
        ...errors,
        phone: digits.length === 10 ? "" : "Please enter 10 digit phone number",
      });
    }}

    required
    className={errors.phone ? "border-red-500" : ""}
  />

  {errors.phone && (
    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
  )}
</div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Best email for receiving boat removal contract, invoices or sales receipts"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="images">Boat Images (Optional)</Label>
                      <Input
                        id="images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        data-testid="input-boat-images"
                      />
                      <p className="text-xs text-muted-foreground">
                        Add up to 3 images (max 10MB each) to accelerate your quote. Images will be automatically optimized.
                      </p>
                      {formData.images.length > 0 && (
                        <p className="text-sm text-foreground font-medium">
                          ✓ {formData.images.length} image(s) ready to send
                        </p>
                      )}
                    </div>

                    <Button 
  type="submit"
  className="w-full bg-primary text-primary-foreground"
  size="lg"
  data-testid="button-submit-quote"
  disabled={errors.phone !== ""}
>
  Get Prices
</Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
