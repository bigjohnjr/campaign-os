import React from "react";

interface BudgetOverviewProps {
  totalCount: number;
  totalBudget: number;
}

export const BudgetOverview: React.FC<BudgetOverviewProps> = ({
  totalCount,
  totalBudget,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h4 className="text-gray-400 text-sm font-bold uppercase">
          Active Campaigns
        </h4>
        {/* TODO: Display the totalCount here with a large font size */}
        <p className="text-2xl font-bold text-white">{totalCount}</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h4 className="text-gray-400 text-sm font-bold uppercase">
          Total Budget
        </h4>
        {/* TODO: Display totalBudget here. Bonus: Add a '$' sign */}
        <p className="text-2xl font-bold text-green-400">${totalBudget}</p>
      </div>
    </div>
  );
};
