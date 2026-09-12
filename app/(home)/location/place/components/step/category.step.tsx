import FormSection from "@/components/form/FormSection";
import PlaceTypeCreateDialog from "../../../place-type/components/PlaceTypeCreateDialog";
import { PlaceType } from "@/types/location/place/place-type.type";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { PlaceFormSchema } from "../form/schema";

interface CategoryStepProps {
  placeTypeData: PlaceType[];
}

const CategoryStep = ({ placeTypeData }: CategoryStepProps) => {
  const placeTypeOptions: EntityOption<PlaceType>[] =
    placeTypeData?.map((placeType) => ({
      value: placeType.id,
      label: placeType.name,
      description: placeType.code ?? undefined,
      data: placeType,
    })) ?? [];
  return (
    <FormSection title="Location" description="Geographical information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<PlaceFormSchema, PlaceType>
          name="placeTypeId"
          label="Place Type"
          placeholder="Search place type..."
          searchPlaceholder="Search place type..."
          emptyText="No place type found"
          createText="Create place type"
          options={placeTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <PlaceTypeCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
};

export default CategoryStep;
