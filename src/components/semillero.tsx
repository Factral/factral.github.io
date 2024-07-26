import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HomeIcon, CodeIcon } from "lucide-react";
import Image from 'next/image';

interface SemilleroProps {
  title: string;
  imageSrc: string;
  description: string;
  homepageLink: string;
  githubLink: string;
}

export function Semillero({
  title,
  imageSrc,
  description,
  homepageLink,
  githubLink,
}: SemilleroProps) {
  return (
    <Card className="flex flex-col border border-muted shadow-lg w-full md:w-[700px] group transition-transform transform hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-4">
        <h3 className="text-xl font-bold relative inline-flex items-center justify-center gap-2 w-full">
          {title}
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col items-center p-4 pt-0">
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src={imageSrc} alt="Project image" layout="fill" objectFit="cover" className="transition-transform hover:scale-105"/>
        </div>
        <p className="text-center text-sm text-muted-foreground mb-4 mt-4">
          {description}
        </p>
        <div className="flex gap-4">
          <Button asChild size="sm" className="h-8 w-auto gap-1">
            <a href={homepageLink} target="_blank" rel="noopener noreferrer">
              <HomeIcon className="h-4 w-4" />
              Homepage
            </a>
          </Button>
          <Button asChild size="sm" className="h-8 w-auto gap-1">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <CodeIcon className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
