import React from 'react';
import { PageSectionContent } from '../../../entities/layouts/PageSectionContent';
import { useTranslation } from "react-i18next";
import { PTitle } from '../../../shared/ui/headings'; 

export const HomeFood = () => {
  const { t } = useTranslation("home");

  return (
    <>
    <PageSectionContent>
      <PTitle>{t("TITLES.THE_PLACE_FOR_GOOD_FOOD")}</PTitle>
    </PageSectionContent>
    </>
  )
}
