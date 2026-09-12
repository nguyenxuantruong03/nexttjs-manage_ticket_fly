"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { DraftData, deleteDraft, getDraftList } from "@/utils/form-draft";

import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FileClock, Trash2 } from "lucide-react";

import { draftConfig, DraftEntity } from "./draft-config";

interface Props {
  entity: DraftEntity;
  createPath: string;
}

export default function DraftPopover({ entity, createPath }: Props) {
  const router = useRouter();

  const [drafts, setDrafts] = useState<DraftData<Record<string, unknown>>[]>(
    [],
  );

  const fields = draftConfig[entity].titleFields;

  const loadDrafts = () => {
    setDrafts(getDraftList<Record<string, unknown>>(entity));
  };

  useEffect(() => {
    loadDrafts();
  }, []);

  const handleDelete = (id: string) => {
    deleteDraft(entity, id);
    loadDrafts();
  };

  const getDraftTitle = (values: Record<string, unknown>) => {
    for (const field of fields) {
      const value = values[field];

      if (
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ""
      ) {
        return String(value);
      }
    }

    return "Untitled Draft";
  };

  if (!drafts.length) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <FileClock className="mr-2 h-4 w-4" />
          Drafts ({drafts.length})
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-[360px] p-0 bg-white border rounded-md shadow-md">
        <div className="border-b p-4">
          <h3 className="font-semibold">Drafts</h3>
        </div>

        <div className="max-h-[350px] overflow-y-auto">
          {drafts.map((draft) => (
            <div
              key={draft.id}
              className="flex items-center justify-between border-b p-4"
            >
              <div>
                <div className="font-medium">{getDraftTitle(draft.values)}</div>

                <div className="text-xs text-muted-foreground">
                  {new Date(draft.updatedAt).toLocaleString()}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => router.push(`${createPath}?draft=${draft.id}`)}
                >
                  Continue
                </Button>

                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => handleDelete(draft.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
