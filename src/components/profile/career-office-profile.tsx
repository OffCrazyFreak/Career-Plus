"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Edit,
  Save,
  X,
  Users,
  Briefcase,
  Calendar,
  Clock,
  Building2,
  UserPlus,
} from "lucide-react";

export function CareerOfficeProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    officeName: "Career Development Center - UniZG",
    university: "University of Zagreb",
    description:
      "Supporting students in their career development journey through counseling, workshops, job placements, and employer partnerships.",
    email: "career@unizg.hr",
    phone: "+385 1 4564 555",
    website: "https://career.unizg.hr",
    location: "Zagreb, Croatia",
    address: "Trg Republike Hrvatske 14, 10000 Zagreb",
    operatingHours: "Monday - Friday, 9:00 - 17:00",
  });

  const [editData, setEditData] = useState(profileData);

  const [services, setServices] = useState([
    "Career Counseling",
    "Resume Review",
    "Interview Preparation",
    "Job Fair Organization",
    "Employer Networking",
    "Workshop Series",
  ]);

  const [newService, setNewService] = useState("");

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleAddService = () => {
    if (newService.trim()) {
      setServices([...services, newService.trim()]);
      setNewService("");
    }
  };

  const handleRemoveService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-[#002F66]">
              Career Office Profile
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
          {/* Office Information */}
          <Card>
            <CardHeader>
              <CardTitle>Office Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-[#002F66] text-white text-3xl">
                      CDC
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Office Name */}
                <div className="space-y-2">
                  <Label>Office Name</Label>
                  {isEditing ? (
                    <Input
                      value={editData.officeName}
                      onChange={(e) =>
                        setEditData({ ...editData, officeName: e.target.value })
                      }
                    />
                  ) : (
                    <p className="text-lg font-semibold">
                      {profileData.officeName}
                    </p>
                  )}
                </div>

                {/* University */}
                <div className="space-y-2">
                  <Label>University</Label>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        value={editData.university}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            university: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <p>{profileData.university}</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label>Description</Label>
                  {isEditing ? (
                    <Textarea
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          description: e.target.value,
                        })
                      }
                      rows={3}
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
                      className="text-[#002F66] hover:underline"
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

              <div className="space-y-2">
                <Label>Operating Hours</Label>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.operatingHours}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          operatingHours: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p>{profileData.operatingHours}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Offered */}
          <Card>
            <CardHeader>
              <CardTitle>Services Offered</CardTitle>
              <CardDescription>
                Manage the services your office provides
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {service}
                      {isEditing && (
                        <button
                          onClick={() => handleRemoveService(index)}
                          className="ml-2 hover:text-destructive"
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
                      placeholder="Add new service..."
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddService();
                        }
                      }}
                    />
                    <Button
                      onClick={handleAddService}
                      variant="outline"
                      className="shrink-0"
                    >
                      <UserPlus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-muted-foreground">
                    Registered Students
                  </div>
                </div>
                <div className="text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">87</div>
                  <div className="text-sm text-muted-foreground">
                    Partner Employers
                  </div>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-sm text-muted-foreground">
                    Events This Year
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
