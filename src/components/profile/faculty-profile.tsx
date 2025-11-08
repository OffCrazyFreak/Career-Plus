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
import {
  School,
  Mail,
  Phone,
  MapPin,
  Globe,
  Edit,
  Save,
  X,
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";

export function FacultyProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "Dr. Marko Novak",
    title: "Erasmus+ Coordinator",
    faculty: "Faculty of Electrical Engineering and Computing",
    university: "University of Zagreb",
    department: "International Relations Office",
    email: "marko.novak@fer.hr",
    phone: "+385 1 6129 999",
    office: "Building A, Room 302",
    location: "Zagreb, Croatia",
    officeHours: "Monday & Wednesday, 10:00 - 12:00",
    bio: "Erasmus+ coordinator with 10 years of experience in international academic cooperation and student mobility programs.",
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-[#002F66]">
              Faculty Profile
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
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-[#002F66] text-white text-3xl">
                      MN
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name & Title */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    {isEditing ? (
                      <Input
                        value={editData.fullName}
                        onChange={(e) =>
                          setEditData({ ...editData, fullName: e.target.value })
                        }
                      />
                    ) : (
                      <p className="text-lg font-semibold">
                        {profileData.fullName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Title/Position</Label>
                    {isEditing ? (
                      <Input
                        value={editData.title}
                        onChange={(e) =>
                          setEditData({ ...editData, title: e.target.value })
                        }
                      />
                    ) : (
                      <p className="text-lg font-semibold">
                        {profileData.title}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label>Bio</Label>
                  {isEditing ? (
                    <Textarea
                      value={editData.bio}
                      onChange={(e) =>
                        setEditData({ ...editData, bio: e.target.value })
                      }
                      rows={3}
                    />
                  ) : (
                    <p className="text-muted-foreground">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* University & Faculty Information */}
          <Card>
            <CardHeader>
              <CardTitle>University & Faculty Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>University</Label>
                <div className="flex items-center gap-2">
                  <School className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.university}
                      onChange={(e) =>
                        setEditData({ ...editData, university: e.target.value })
                      }
                    />
                  ) : (
                    <p>{profileData.university}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Faculty</Label>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.faculty}
                      onChange={(e) =>
                        setEditData({ ...editData, faculty: e.target.value })
                      }
                    />
                  ) : (
                    <p>{profileData.faculty}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Department</Label>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.department}
                      onChange={(e) =>
                        setEditData({ ...editData, department: e.target.value })
                      }
                    />
                  ) : (
                    <p>{profileData.department}</p>
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
                <Label>Office Location</Label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={editData.office}
                      onChange={(e) =>
                        setEditData({ ...editData, office: e.target.value })
                      }
                    />
                  ) : (
                    <p>{profileData.office}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Office Hours</Label>
                {isEditing ? (
                  <Input
                    value={editData.officeHours}
                    onChange={(e) =>
                      setEditData({ ...editData, officeHours: e.target.value })
                    }
                  />
                ) : (
                  <p>{profileData.officeHours}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Mobility Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-sm text-muted-foreground">
                    Outgoing Students
                  </div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">32</div>
                  <div className="text-sm text-muted-foreground">
                    Incoming Students
                  </div>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-[#002F66]" />
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">
                    Partner Universities
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
