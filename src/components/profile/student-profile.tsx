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
  User,
  Upload,
  FileText,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  Save,
  Edit,
  X,
  Plus,
} from "lucide-react";

export function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [cvFile, setCvFile] = useState<string | null>("Ana_Horvat_CV.pdf");

  const [profileData, setProfileData] = useState({
    fullName: "Ana Horvat",
    email: "ana.horvat@fer.hr",
    phone: "+385 91 234 5678",
    location: "Zagreb, Croatia",
    university:
      "Faculty of Electrical Engineering and Computing (FER), University of Zagreb",
    degree: "Master's in Computer Science",
    yearOfStudy: "2nd Year",
    bio: "Passionate computer science student with a strong interest in software development and artificial intelligence. Eager to gain international experience through Erasmus+ mobility programs and contribute to innovative tech projects.",
    looking:
      "Looking for software development internship opportunities in AI/ML, web development, or data science. Interested in positions across Europe, particularly in Austria, Germany, and the Netherlands.",
    offering:
      "Strong programming skills in Python, JavaScript, and Java. Experience with React, Node.js, and machine learning frameworks. Quick learner with excellent problem-solving abilities and fluent English.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "Machine Learning",
      "SQL",
      "Git",
      "Agile",
    ],
    languages: [
      "Croatian (Native)",
      "English (Fluent)",
      "German (Intermediate)",
    ],
    interests: [
      "Artificial Intelligence",
      "Web Development",
      "Data Science",
      "Mobile Apps",
    ],
    website: "https://anahorvat.dev",
    linkedin: "https://linkedin.com/in/anahorvat",
    github: "https://github.com/anahorvat",
  });

  const [editData, setEditData] = useState(profileData);
  const [newSkill, setNewSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file.name);
    }
  };

  const addItem = (
    field: "skills" | "languages" | "interests",
    value: string,
    setter: (val: string) => void
  ) => {
    if (value.trim()) {
      setEditData({
        ...editData,
        [field]: [...editData[field], value.trim()],
      });
      setter("");
    }
  };

  const removeItem = (
    field: "skills" | "languages" | "interests",
    index: number
  ) => {
    setEditData({
      ...editData,
      [field]: editData[field].filter((_: any, i: number) => i !== index),
    });
  };

  const displayData = isEditing ? editData : profileData;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-[#002F66]">
              Student Profile
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
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#002F66]" />
                Personal Information
              </CardTitle>
              <CardDescription>Your basic personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar and Name */}
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-[#002F66] text-white text-2xl">
                    {displayData.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={editData.fullName}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            fullName: e.target.value,
                          })
                        }
                      />
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-[#002F66]">
                        {displayData.fullName}
                      </h2>
                      <p className="text-gray-600">{displayData.degree}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-2 mb-2"
                  >
                    <Mail className="h-4 w-4 text-[#002F66]" />
                    Email
                  </Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                    />
                  ) : (
                    <p className="text-gray-700">{displayData.email}</p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="flex items-center gap-2 mb-2"
                  >
                    <Phone className="h-4 w-4 text-[#002F66]" />
                    Phone
                  </Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={editData.phone}
                      onChange={(e) =>
                        setEditData({ ...editData, phone: e.target.value })
                      }
                    />
                  ) : (
                    <p className="text-gray-700">{displayData.phone}</p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="location"
                    className="flex items-center gap-2 mb-2"
                  >
                    <MapPin className="h-4 w-4 text-[#002F66]" />
                    Location
                  </Label>
                  {isEditing ? (
                    <Input
                      id="location"
                      value={editData.location}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          location: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-700">{displayData.location}</p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="yearOfStudy"
                    className="flex items-center gap-2 mb-2"
                  >
                    <GraduationCap className="h-4 w-4 text-[#002F66]" />
                    Year of Study
                  </Label>
                  {isEditing ? (
                    <Input
                      id="yearOfStudy"
                      value={editData.yearOfStudy}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          yearOfStudy: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-700">{displayData.yearOfStudy}</p>
                  )}
                </div>
              </div>

              {/* University */}
              <div>
                <Label
                  htmlFor="university"
                  className="flex items-center gap-2 mb-2"
                >
                  <GraduationCap className="h-4 w-4 text-[#002F66]" />
                  University
                </Label>
                {isEditing ? (
                  <Input
                    id="university"
                    value={editData.university}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        university: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="text-gray-700">{displayData.university}</p>
                )}
              </div>

              {/* Degree */}
              <div>
                <Label
                  htmlFor="degree"
                  className="flex items-center gap-2 mb-2"
                >
                  <GraduationCap className="h-4 w-4 text-[#002F66]" />
                  Degree Program
                </Label>
                {isEditing ? (
                  <Input
                    id="degree"
                    value={editData.degree}
                    onChange={(e) =>
                      setEditData({ ...editData, degree: e.target.value })
                    }
                  />
                ) : (
                  <p className="text-gray-700">{displayData.degree}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* CV Upload Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#002F66]" />
                Curriculum Vitae (CV)
              </CardTitle>
              <CardDescription>
                Upload your CV for internship applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                {cvFile ? (
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-[#002F66]" />
                    <div>
                      <p className="font-medium">{cvFile}</p>
                      <p className="text-sm text-gray-500">
                        Last updated: Nov 5, 2024
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">No CV uploaded yet</p>
                )}
                <div>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleCVUpload}
                    className="hidden"
                    id="cv-upload"
                    disabled={!isEditing}
                  />
                  <Label htmlFor="cv-upload">
                    <Button
                      asChild
                      variant="outline"
                      className="cursor-pointer"
                      disabled={!isEditing}
                    >
                      <span>
                        <Upload className="mr-2 h-4 w-4" />
                        {cvFile ? "Replace" : "Upload"} CV
                      </span>
                    </Button>
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#002F66]" />
                About Me
              </CardTitle>
              <CardDescription>Tell others about yourself</CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={editData.bio}
                  onChange={(e) =>
                    setEditData({ ...editData, bio: e.target.value })
                  }
                  rows={4}
                  placeholder="Write a brief introduction about yourself..."
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {displayData.bio}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Looking For Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#002F66]" />
                What I'm Looking For
              </CardTitle>
              <CardDescription>
                Describe your internship goals and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={editData.looking}
                  onChange={(e) =>
                    setEditData({ ...editData, looking: e.target.value })
                  }
                  rows={3}
                  placeholder="What kind of internship are you looking for?"
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {displayData.looking}
                </p>
              )}
            </CardContent>
          </Card>

          {/* What I Offer Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#002F66]" />
                What I Can Offer
              </CardTitle>
              <CardDescription>
                Highlight your skills and strengths
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={editData.offering}
                  onChange={(e) =>
                    setEditData({ ...editData, offering: e.target.value })
                  }
                  rows={3}
                  placeholder="What skills and value can you bring to an organization?"
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {displayData.offering}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Skills, Languages, Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {displayData.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-[#002F66] text-white"
                    >
                      {skill}
                      {isEditing && (
                        <X
                          className="ml-1 h-3 w-3 cursor-pointer"
                          onClick={() => removeItem("skills", index)}
                        />
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add skill"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          addItem("skills", newSkill, setNewSkill);
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      onClick={() => addItem("skills", newSkill, setNewSkill)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {displayData.languages.map((language, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-green-600 text-white"
                    >
                      {language}
                      {isEditing && (
                        <X
                          className="ml-1 h-3 w-3 cursor-pointer"
                          onClick={() => removeItem("languages", index)}
                        />
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                      placeholder="Add language"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          addItem("languages", newLanguage, setNewLanguage);
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      onClick={() =>
                        addItem("languages", newLanguage, setNewLanguage)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {displayData.interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-600 text-white"
                    >
                      {interest}
                      {isEditing && (
                        <X
                          className="ml-1 h-3 w-3 cursor-pointer"
                          onClick={() => removeItem("interests", index)}
                        />
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      placeholder="Add interest"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          addItem("interests", newInterest, setNewInterest);
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      onClick={() =>
                        addItem("interests", newInterest, setNewInterest)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Social Links Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#002F66]" />
                Online Presence
              </CardTitle>
              <CardDescription>Your professional social links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label
                  htmlFor="website"
                  className="flex items-center gap-2 mb-2"
                >
                  <Globe className="h-4 w-4 text-[#002F66]" />
                  Personal Website
                </Label>
                {isEditing ? (
                  <Input
                    id="website"
                    value={editData.website}
                    onChange={(e) =>
                      setEditData({ ...editData, website: e.target.value })
                    }
                    placeholder="https://yourwebsite.com"
                  />
                ) : (
                  <a
                    href={displayData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#002F66] hover:underline"
                  >
                    {displayData.website}
                  </a>
                )}
              </div>

              <div>
                <Label
                  htmlFor="linkedin"
                  className="flex items-center gap-2 mb-2"
                >
                  <Linkedin className="h-4 w-4 text-[#002F66]" />
                  LinkedIn
                </Label>
                {isEditing ? (
                  <Input
                    id="linkedin"
                    value={editData.linkedin}
                    onChange={(e) =>
                      setEditData({ ...editData, linkedin: e.target.value })
                    }
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                ) : (
                  <a
                    href={displayData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#002F66] hover:underline"
                  >
                    {displayData.linkedin}
                  </a>
                )}
              </div>

              <div>
                <Label
                  htmlFor="github"
                  className="flex items-center gap-2 mb-2"
                >
                  <Github className="h-4 w-4 text-[#002F66]" />
                  GitHub
                </Label>
                {isEditing ? (
                  <Input
                    id="github"
                    value={editData.github}
                    onChange={(e) =>
                      setEditData({ ...editData, github: e.target.value })
                    }
                    placeholder="https://github.com/yourusername"
                  />
                ) : (
                  <a
                    href={displayData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#002F66] hover:underline"
                  >
                    {displayData.github}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
