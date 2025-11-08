import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const resources = [
  { name: "Erasmus+ Official Guide", href: "#" },
  { name: "Housing Platforms Directory", href: "#" },
  { name: "Language Learning Tools", href: "#" },
  { name: "Budgeting Calculator", href: "#" },
  { name: "ESN Network", href: "#" },
];

export function HelpfulResources() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold">Helpful Resources</h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.href}
            className="block text-sm text-blue-600 hover:underline"
          >
            {resource.name}
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
