"use client";

import React, { useState } from "react";
import PaymentCard from "./exampleComponents/PaymentCard";
import TeamInviteCard from "./exampleComponents/TeamInviteCard";
import ComputeCard from "./exampleComponents/ComputeCard";
import AssistantCard from "./exampleComponents/AssistantCard";
import ProfileSettingsCard from "./exampleComponents/ProfileSettingsCard";
import TasksCard from "./exampleComponents/TasksCard";
import NotificationsCard from "./exampleComponents/NotificationsCard";
import AuthCard from "./exampleComponents/AuthCard";
import ToastExampleCard from "./exampleComponents/ToastExampleCard";
import InputFieldsCard from "./exampleComponents/InputFieldsCard";
import LoadingStateCard from "./exampleComponents/LoadingStateCard";
import AuthExamplePage from "./authPageExample/AuthExamplePage";

const ExamplesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseTabs = ["Examples", "Authentication"];

  return (
    <div className="rounded-2xl p-3">
      <div className="scroll-mt-24">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {showcaseTabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors ${
                index === activeTab
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        {activeTab === 0 && (
          <div className="theme-container mx-auto grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 2xl:gap-8">
            <div className="flex flex-col gap-5 *:[div]:w-full *:[div]:max-w-full">
              <PaymentCard />
              <ProfileSettingsCard />
            </div>
            <div className="hidden md:flex flex-col gap-5 *:[div]:w-full *:[div]:max-w-full">
              <TeamInviteCard />
              <TasksCard />
              <ToastExampleCard />
              <InputFieldsCard />
            </div>
            <div className="flex flex-col gap-5 *:[div]:w-full *:[div]:max-w-full">
              <ComputeCard />
              <NotificationsCard />
            </div>
            <div className="hidden md:flex flex-col gap-5 *:[div]:w-full *:[div]:max-w-full">
              <AssistantCard />
              <AuthCard />
              <LoadingStateCard />
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="mx-auto">
             <AuthExamplePage/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamplesSection;
