"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { RotateCcw } from "lucide-react";
import {
  countries,
  fields,
  languages,
  durations,
} from "../data/internships-data";

export function FilterBar() {
  return (
    <div className="bg-white border rounded-lg p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
        {/* Filter Dropdowns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 flex-1 w-full">
          {/* Country Filter */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Country
            </label>
            <Select defaultValue="All Countries">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Field Filter */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Field
            </label>
            <Select defaultValue="All Fields">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fields.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Language Filter */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Language
            </label>
            <Select defaultValue="All Languages">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Duration Filter */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Duration
            </label>
            <Select defaultValue="All Durations">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>
                    {duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Paid/Unpaid Filter */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">
              Stipend
            </label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="paid">Paid Only</SelectItem>
                <SelectItem value="unpaid">Unpaid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Reset Button */}
        <Button variant="outline" className="gap-2 whitespace-nowrap">
          <RotateCcw className="w-4 h-4" />
          Reset Filters
        </Button>
      </div>

      {/* Active Filters Display */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-xs text-muted-foreground">Active filters:</span>
        <Badge variant="secondary" className="gap-1">
          All Countries
        </Badge>
      </div>
    </div>
  );
}
