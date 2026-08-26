import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
import { YachtFormSchema } from "../schema/core/yacht.schema";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import { EntityOption } from "@/components/entity-selector";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface SettingsStepProps {
  searchTagData: SearchTag[];
  bookingTypeData: BookingType[];
}

export default function SettingsStep({
  searchTagData,
  bookingTypeData,
}: SettingsStepProps) {
  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));
  return (
    <>
      <FormSection
        title="Yacht Settings"
        description="General yacht configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema> name="active" label="Active" />
          <FormSwitch<YachtFormSchema> name="featured" label="Featured" />
          <FormSwitch<YachtFormSchema> name="searchable" label="Searchable" />
          <FormSelect<YachtFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />
          <FormInput<YachtFormSchema> name="name" label="Yacht Name" />
          <FormEntityMultiSelector<YachtFormSchema, SearchTag>
            name="tagIds"
            label="Tags"
            placeholder="Search tags..."
            searchPlaceholder="Search tags..."
            emptyText="No tags found"
            createText="Create tag"
            options={tagOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <SearchTagCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />
        </div>
      </FormSection>
    </>
  );
}
