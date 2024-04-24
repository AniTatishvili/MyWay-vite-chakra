import React from 'react';
import { PageSectionContent } from 'src/entities/layouts/PageSectionContent';
import { useTranslation } from "react-i18next";
import { PTitle } from 'src/shared/ui/headings';

export const HomeQuestions = () => {
  const { t } = useTranslation("home");

  return (
    <>
    <PageSectionContent>
      <PTitle>{t("TITLES.FREQUESNTLY_ASKED_QUESTIONS")}</PTitle>
    </PageSectionContent>
    </>
  )
}
