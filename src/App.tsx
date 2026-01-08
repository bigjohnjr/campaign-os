import { useState } from "react";
import { CampaignCard, type Campaign } from "./features/campaigns/CampaignCard";
import { CreateCampaignForm } from "./features/campaigns/CreateCampaignForm";
import { BudgetOverview } from "./features/campaigns/BudgetOverview";

function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const handleAddCampaign = (input: {
    title: string;
    description: string;
    budget: number;
  }) => {
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      title: input.title,
      budget: input.budget,
      description: input.description,
      status: "draft",
    };

    setCampaigns([...campaigns, newCampaign]);
  };

  const totalBudget = campaigns.reduce((acc, current) => current.budget + acc, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-500 mb-8">
          CampaignOS
        </h1>

        <BudgetOverview totalBudget={totalBudget} totalCount={campaigns.length} />

        <CreateCampaignForm onAdd={handleAddCampaign} />

        <div className="space-y-4">
          {campaigns.map((camp) => (
            <CampaignCard key={camp.id} campaign={camp} />
          ))}

          {campaigns.length === 0 && (
            <p className="text-gray-500 text-center italic">
              No campaigns yet. Create one above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
