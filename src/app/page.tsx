"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BlockDagInfo from "@/features/BlockDagInfo";
import BalanceChecker from "@/features/BalanceChecker";
import DaaScore from "@/features/DaaScore";
import BlockAdded from "@/features/BlockAdded";
import VirtualChainChanged from "@/features/VirtualChainChanged";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { RpcProvider } from "@/context/RpcContext";
import { ThemeProvider } from "@/context/ThemeProvider";

const featureComponents: { [key: string]: React.FC } = {
  BlockDagInfo,
  BalanceChecker,
  DaaScore,
  BlockAdded,
  VirtualChainChanged,
};

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<string>("BlockDagInfo");
  const [isKaspaReady, setIsKaspaReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initKaspa = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const kaspaModule: any = await import("@kluster/kaspa-wasm-web");
        const init = kaspaModule.default || kaspaModule.init;
        const initConsolePanicHook = kaspaModule.initConsolePanicHook;
        
        if (typeof init === "function") {
          await init();
        }
        if (typeof initConsolePanicHook === "function") {
          initConsolePanicHook();
        }
        setIsKaspaReady(true);
      } catch (e) {
        console.error("Failed to initialize Kaspa WASM:", e);
        setError("Failed to initialize Kaspa WASM. Please refresh the page.");
      }
    };

    initKaspa();
  }, []);

  const FeatureComponent = featureComponents[selectedFeature];

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
          <p className="mt-2">{error}</p>
          <Button onClick={() => window.location.reload()} className="mt-4">
            Refresh
          </Button>
        </div>
      </div>
    );
  }

  if (!isKaspaReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Initializing Kaspa WASM...</h1>
          <p className="mt-2 text-muted-foreground">Please wait while we load the Kaspa library.</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="kaspa-next-theme">
      <RpcProvider>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-background text-foreground">
          <div className="hidden border-r bg-muted/40 md:block">
            <Sidebar onSelectFeature={setSelectedFeature} />
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <Sidebar onSelectFeature={setSelectedFeature} />
                </SheetContent>
              </Sheet>
              <Header />
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {FeatureComponent ? <FeatureComponent /> : (
                <div>
                  <h2 className="text-3xl">Welcome to the Kaspa Next.js Starter</h2>
                  <p>Select a feature from the sidebar to get started.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </RpcProvider>
    </ThemeProvider>
  );
}