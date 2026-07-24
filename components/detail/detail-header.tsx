"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";

import { Globe, Star, CheckCircle2, XCircle } from "lucide-react";

import { formatLabel } from "./utils/format";
import { getQuickInfo, resolveImage, resolveSubtitle } from "./utils/resolve";

type Props = {
  title: string;

  data: Record<string, any>;
};

export function DetailHeader({ title, data }: Props) {
  const image = resolveImage(data);

  const subtitle = resolveSubtitle(data);

  return (
    <Card
      className="
relative
overflow-hidden
border-none
bg-gradient-to-br
from-primary/10
via-background
to-background
shadow-xl
"
    >
      {/* background decoration */}

      <div
        className="
absolute
right-0
top-0
h-40
w-40
rounded-full
bg-primary/10
blur-3xl
"
      />

      <CardContent
        className="
relative
flex
flex-col
gap-6
p-8
md:flex-row
md:items-center
"
      >
        {/* IMAGE */}

        <Avatar
          className="
h-32
w-32
rounded-3xl
border
shadow-lg
"
        >
          {image && <AvatarImage src={image} alt={title} />}

          <AvatarFallback
            className="
rounded-3xl
text-4xl
font-bold
"
          >
            {title.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* INFO */}

        <div
          className="
flex-1
space-y-4
"
        >
          <div>
            <h1
              className="
text-4xl
font-bold
tracking-tight
"
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="
mt-2
text-muted-foreground
"
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* BADGES */}

          <div
            className="
flex
flex-wrap
gap-2
"
          >
            {data.active !== undefined && (
              <Badge
                variant={data.active ? "default" : "secondary"}
                className="
gap-1
"
              >
                {data.active ? (
                  <>
                    <CheckCircle2 size={14} />
                    Active
                  </>
                ) : (
                  <>
                    <XCircle size={14} />
                    Inactive
                  </>
                )}
              </Badge>
            )}

            {data.featured && (
              <Badge
                variant="outline"
                className="
gap-1
"
              >
                <Star size={14} />
                Featured
              </Badge>
            )}

            {data.website && (
              <Badge
                variant="outline"
                className="
gap-1
"
              >
                <Globe size={14} />
                Website
              </Badge>
            )}
          </div>

          <Separator />

          {/* QUICK INFO */}

          <div
            className="
grid
grid-cols-2
gap-4
md:grid-cols-4
"
          >
            {getQuickInfo(data).map((item) => (
              <div
                key={item.label}
                className="
rounded-xl
bg-background/60
p-3
border
"
              >
                <p
                  className="
text-xs
text-muted-foreground
"
                >
                  {item.label}
                </p>

                <p
                  className="
font-semibold
truncate
"
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
