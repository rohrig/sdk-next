import { SfDrawer } from "@storefront-ui/react";

export const LeftDraw = () => {
  return (
    <SfDrawer
    open
    className="mt-20 !border-none"
    >
      <div className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center">Your Endpoints</div>
      </div>
      <div className="p-5 px-10">
        <strong>
          <p>
            To create a new endpoint, run:
          </p>
          <p className="typography-text-base md:typography-text-lg bg-slate-300 p-5">
            npx vsf-cli add endpoint &lt;endpoint-name
          </p>
        </strong>
        
      </div>
    </SfDrawer>
  );
}

  