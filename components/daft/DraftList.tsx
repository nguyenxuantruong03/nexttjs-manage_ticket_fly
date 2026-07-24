"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteDraft, DraftData, getDraftList } from "@/utils/form-draft";
import { Button } from "@/components/ui/button";

interface Props<T> {
  entity: string;
}

export default function DraftList<T>({ entity }: Props<T>) {
  const router = useRouter();

  const [drafts, setDrafts] = useState<DraftData<T>[]>([]);

  const loadDrafts = () => {
    setDrafts(getDraftList<T>(entity));
  };

  useEffect(() => {
    loadDrafts();
  }, []);

  const handleDelete = (id: string) => {
    deleteDraft(entity, id);

    loadDrafts();
  };

  if (!drafts.length) return null;

  return (
    <div className="mb-6 rounded-md border p-4">
      <h2 className="mb-4 text-lg font-semibold">Drafts</h2>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Updated</th>

            <th />
          </tr>
        </thead>

        <tbody>
          {drafts.map((draft) => (
            <tr key={draft.id}>
              <td>{new Date(draft.updatedAt).toLocaleString()}</td>

              <td className="space-x-2">
                <Button
                  size="sm"
                  onClick={() =>
                    router.push(`/currency/create?draft=${draft.id}`)
                  }
                >
                  Continue
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(draft.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
