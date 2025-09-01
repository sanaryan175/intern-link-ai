import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModuleOverview } from "@/components/ModuleOverview";
import { StudentsDashboard } from "@/components/modules/StudentsDashboard";
import { CompaniesDashboard } from "@/components/modules/CompaniesDashboard";
import { GovernmentDashboard } from "@/components/modules/GovernmentDashboard";

type ActiveModule = 'students' | 'companies' | 'government' | null;

const Index = () => {
  const [activeModule, setActiveModule] = useState<ActiveModule>(null);

  const handleModuleChange = (module: ActiveModule) => {
    setActiveModule(module);
  };

  const handleGetStarted = (module: 'students' | 'companies' | 'government') => {
    setActiveModule(module);
  };

  // Render specific module dashboard
  if (activeModule === 'students') {
    return (
      <>
        <Header activeModule={activeModule} onModuleChange={handleModuleChange} />
        <StudentsDashboard />
      </>
    );
  }

  if (activeModule === 'companies') {
    return (
      <>
        <Header activeModule={activeModule} onModuleChange={handleModuleChange} />
        <CompaniesDashboard />
      </>
    );
  }

  if (activeModule === 'government') {
    return (
      <>
        <Header activeModule={activeModule} onModuleChange={handleModuleChange} />
        <GovernmentDashboard />
      </>
    );
  }

  // Render landing page
  return (
    <div className="min-h-screen bg-background">
      <Header activeModule={activeModule} onModuleChange={handleModuleChange} />
      <Hero onGetStarted={handleGetStarted} />
      <ModuleOverview onSelectModule={handleGetStarted} />
    </div>
  );
};

export default Index;
