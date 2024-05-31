import { useTranslation } from "react-i18next";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";
import { PTitle } from "src/shared/ui/headings";
import { FooterNewsletter } from "src/widgets/footer/footer-newsletter";

export const HomeNewsletter = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <PageSectionContent>
        <PTitle>{t("TITLES.NEWSLETTER")}</PTitle>
        <FooterNewsletter />
      </PageSectionContent>
    </>
  );
};
