import Link from "next/link";
import React from "react";
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

const ExamplesSection = () => {
  return (
    <div>
      <div className="flex scroll-mt-24">
        <div className="container flex items-center justify-between gap-4 py-4">
          <div className="flex items-center [&>a:first-child]:text-primary flex-1 overflow-hidden">
            <div className="relative max-w-[96%] md:max-w-[600px] lg:max-w-none">
              <div className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1">
                <div className="flex items-center">
                  <Link
                    href={"/"}
                    className="text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 items-center justify-center gap-2 px-4 text-center text-base font-medium transition-colors"
                  >
                    Examples
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ****************** Exmaple ************************* */}

      <div className="container-wrapper section-soft flex-1 pb-6">
        <div className="container">
          <section className="theme-container mx-auto grid gap-8 py-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 2xl:gap-8">
            <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
              <PaymentCard />
              <ProfileSettingsCard />
            </div>
            <div className="hidden md:flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
              <TeamInviteCard />
              <TasksCard />
              <ToastExampleCard />
              <InputFieldsCard />
            </div>
            <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
              <ComputeCard />
              <NotificationsCard />
            </div>
            <div className="hidden md:flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
              <AssistantCard />
              <AuthCard />
              <LoadingStateCard />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
