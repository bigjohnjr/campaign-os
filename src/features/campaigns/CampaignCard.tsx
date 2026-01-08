import React from "react";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  budget: number;
  status: "draft" | "active" | "completed";
}

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
        <h4 className="text-l font-bold text-white">{campaign.budget}</h4>
        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium uppercase border border-gray-600">
          {campaign.status}
        </span>
      </div>

      <p className="text-gray-400 mb-4">{campaign.description}</p>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
          View Details →
        </button>
      </div>
    </div>
  );
};
