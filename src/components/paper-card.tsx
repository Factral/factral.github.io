import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, HomeIcon, CodeIcon, FileCodeIcon } from "lucide-react";
import Image from 'next/image';

interface PaperCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  pdfLink?: string;
  homepageLink?: string;
  codeLink?: string;
  posterLink?: string;
  authors: string;
  previewLink: string;
  conferenceTag: string; // New property for the conference/journal tag
}

export function PaperCard({
  title,
  description,
  tags,
  pdfLink,
  homepageLink,
  codeLink,
  posterLink,
  authors,
  previewLink,
  conferenceTag // Conference/journal tag parameter
}: PaperCardProps) {
  return (
    <Card className="flex flex-col md:flex-row border border-muted overflow-hidden shadow-lg w-full md:w-[700px] group transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 p-3">
          <CardHeader className="flex-1 p-0">
            <div className="flex items-center justify-between gap-x-2 text-lg">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none relative text-xl">
                <span className="relative group-hover:underline after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300">
                  {title}
                </span>
              </h3>
            </div>
            <p className="text-xs text-muted-foreground">{authors}</p>
          </CardHeader>
          <div className="relative w-full h-64 md:hidden overflow-hidden rounded-lg mt-2">
            <Image src={previewLink} alt={title} layout="fill" objectFit="scale-down" className="transition-transform hover:scale-105"/>
          </div>
          <CardContent className="mt-2 flex flex-1 flex-col p-0">
            <div className="inline-block mb-2">
              <Badge key={conferenceTag} variant="default" className="px-1 py-0 text-xs bg-green-600 text-white">
                {conferenceTag}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-1 py-0 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-1 flex-wrap">
              {homepageLink && (
                <Button asChild size="sm" className="h-6 w-auto gap-1">
                  <a href={homepageLink} target="_blank" rel="noopener noreferrer">
                    <HomeIcon className="h-4 w-4" />
                    Homepage
                  </a>
                </Button>
              )}
              {codeLink && (
                <Button asChild size="sm" className="h-6 w-auto gap-1">
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <CodeIcon className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {pdfLink && (
                <Button asChild size="sm" className="h-6 w-auto gap-1">
                  <a href={pdfLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4" />
                    PDF
                  </a>
                </Button>
              )}
              {posterLink && (
                <Button asChild size="sm" className="h-6 w-auto gap-1">
                  <a href={posterLink} target="_blank" rel="noopener noreferrer">
                    <FileCodeIcon className="h-4 w-4" />
                    Poster
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
        <div className="relative w-full md:w-1/3 md:h-auto overflow-hidden rounded-lg md:rounded-r-lg hidden md:block">
          <Image src={previewLink} alt={title} layout="fill" objectFit="scale-down" className="transition-transform hover:scale-105"/>
        </div>
      </div>
    </Card>
  );
}
