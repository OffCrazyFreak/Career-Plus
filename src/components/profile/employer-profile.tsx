"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  Users,
  Briefcase,
  Edit,
  Save,
  X,
  Upload,
  Award,
  Plus,
} from "lucide-react";

export function EmployerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const [profileData, setProfileData] = useState({
    companyName: "TechCorp Solutions",
    industry: "Information Technology",
    size: "50-200 employees",
    description:
      "Leading technology company specializing in software development and IT consulting services for international markets.",
    website: "https://techcorp-solutions.com",
    email: "hr@techcorp-solutions.com",
    phone: "+43 1 234 5678",
    location: "Vienna, Austria",
    address: "Ringstraße 12, 1010 Vienna",
    foundedYear: "2015",
    verificationStatus: "Verified",
  });

  const [editData, setEditData] = useState(profileData);
  const [benefits, setBenefits] = useState([
    "Competitive salary",
    "Flexible working hours",
    "Remote work options",
    "Professional development",
  ]);
  const [newBenefit, setNewBenefit] = useState("");

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
      setBenefits([...benefits, newBenefit.trim()]);
      setNewBenefit("");
    }
  };

  const removeBenefit = (index: number) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-[#002F66]">
              Company Profile
            </h1>
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-[#002F66] hover:bg-[#003d80]"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button onClick={handleCancel} variant="outline">
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-[#002F66] hover:bg-[#003d80]"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6">
          {/* Company Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
              <CardDescription>
                Your company information visible to students and partners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-[#002F66] text-white text-3xl">
                      TC
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Logo
                    </Button>
                  )}
                  {profileData.verificationStatus === "Verified" && (
                    <Badge className="bg-green-600">
                      <Award className="mr-1 h-3 w-3" />
                      Verified Employer
                    </Badge>
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  {isEditing ? (
                    <Input
                      value={editData.companyName}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          companyName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-lg font-semibold">
                      {profileData.companyName}
                    </p>
                  )}
                </div>

                {/* Industry & Size */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Industry</Label>
                    {isEditing ? (
                      <Input
                        value={editData.industry}
                        onChange={(e) =>
                          setEditData({ ...editData, industry: e.target.value })
                        }
                      />
                    ) : (
                      <p>{profileData.industry}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Company Size</Label>
                    {isEditing ? (
                      <Input
                        value={editData.size}
                        onChange={(e) =>
                          setEditData({ ...editData, size: e.target.value })
                        }
                      />
                    ) : (
                      <p>{profileData.size}</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label>Company Description</Label>
                  {isEditing ? (
                    <Textarea
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          description: e.target.value,
                        })
                      }
                      rows={4}
                    />
                  ) : (
                    <p className="text-muted-foreground">
                      {profileData.description}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      type="email"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                    />
                  ) : (
                    <p>{profileData.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Phone</Label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.phone}
                      onChange={(e) =>
                        setEditData({ ...editData, phone: e.target.value })
                      }
                    />
                  ) : (
                    <p>{profileData.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Website</Label>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.website}
                      onChange={(e) =>
                        setEditData({ ...editData, website: e.target.value })
                      }
                    />
                  ) : (
                    <a
                      href={profileData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {profileData.website}
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Address</Label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.address}
                      onChange={(e) =>
                        setEditData({ ...editData, address: e.target.value })
                      }
                    />
                  ) : (
                    <p>{profileData.address}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits & Perks */}
          <Card>
            <CardHeader>
              <CardTitle>Benefits & Perks</CardTitle>
              <CardDescription>
                Highlight what makes your company a great place to work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {benefit}
                      {isEditing && (
                        <button
                          onClick={() => removeBenefit(index)}
                          className="ml-2 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>

                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a benefit..."
                      value={newBenefit}
                      onChange={(e) => setNewBenefit(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addBenefit();
                        }
                      }}
                    />
                    <Button onClick={addBenefit} variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Company Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">
                    Active Postings
                  </div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">
                    Applications Received
                  </div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">
                    Average Rating
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
