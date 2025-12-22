import React, { useState } from "react";

interface CampaignInput {
  title: string;
  description: string;
  budget: number;
}

interface CreateCampaignFormProps {
  onAdd: (campaign: CampaignInput) => void;
}

export const CreateCampaignForm: React.FC<CreateCampaignFormProps> = ({
  onAdd,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({ title, description, budget });

    setTitle("");
    setDescription("");
    setBudget(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 border border-gray-700"
    >
      <h2 className="text-xl font-bold text-white mb-4">Create New Campaign</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Campaign Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Summer Sale 2025"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Descriptions
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What is this campaign about?"
          rows={3}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Budget ($)
        </label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Add Campaign
      </button>
    </form>
  );
};
