import { Suspense } from "react";
import { FreeInner } from "./FreeInner";

export default function FreeConsultPage() {
  return (
    <Suspense fallback={null}>
      <FreeInner />
    </Suspense>
  );
}

