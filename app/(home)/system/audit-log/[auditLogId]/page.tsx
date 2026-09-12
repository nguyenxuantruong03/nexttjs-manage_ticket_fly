import { DetailPage } from "@/components/detail/detail-page";

import { auditLogFieldGroups } from "../components/field-group";

import { AuditLogServerService } from "@/services/system/audit-log/server";

type Props = {
  params: Promise<{
    auditLogId: string;
  }>;
};

export default async function AuditLogDetailPage({ params }: Props) {
  const { auditLogId } = await params;

  const auditLogData = await AuditLogServerService.getOne(auditLogId);

  return (
    <DetailPage
      groups={auditLogFieldGroups}
      data={auditLogData}
      title={`Audit Log ${auditLogData.action}`}
    />
  );
}
