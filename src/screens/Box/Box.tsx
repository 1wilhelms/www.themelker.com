import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const Box = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4">
      {/* Main logo/header */}
      <div className="w-full max-w-4xl mb-6">
        <img className="w-full" alt="Melker logo" src="/page-1.svg" />
      </div>
    </div>
  );
};