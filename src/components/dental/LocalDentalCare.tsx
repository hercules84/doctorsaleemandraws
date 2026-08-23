import { motion } from "framer-motion";
import { Award, MapPin, Navigation, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface LocalDentalCareProps {
  onBookingClick: () => void;
}

const LocalDentalCare = ({ onBookingClick }: LocalDentalCareProps) => {
  const { t, dir } = useLanguage();
  const mapDirectionsUrl = "https://share.google/jfAOUXSkIEwwTg9fn";
  const services = [
    t("services.teethWhitening"),
    t("services.dentalImplants"),
    t("services.cosmeticDentistry"),
    t("services.orthodontics"),
    t("services.rootCanal"),
    t("services.pediatricDentistry"),
  ];

  return (
    <section id="dentist-duhok" className="py-16 md:py-24 bg-secondary/35">
      <div className="container px-4 sm:px-6">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${dir === "rtl" ? "lg:grid-flow-dense" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className={dir === "rtl" ? "lg:col-start-2 text-right" : ""}
          >
            <span className={`inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
              <Stethoscope className="w-4 h-4" />
              {t("local.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              {t("local.title1")} <span className="text-gradient">{t("local.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              {t("local.description")}
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 mt-7 ${dir === "rtl" ? "sm:flex-row-reverse" : ""}`}>
              <Button variant="teal" size="lg" onClick={onBookingClick} className="w-full sm:w-auto">
                {t("local.bookConsultation")}
              </Button>
              <a href="tel:07781665000" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className={`w-full gap-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                  <Phone className="w-4 h-4" />
                  {t("local.callClinic")}
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className={`grid gap-4 ${dir === "rtl" ? "lg:col-start-1 lg:row-start-1 text-right" : ""}`}
          >
            <article className={`rounded-2xl bg-card border border-border/60 p-5 md:p-6 shadow-soft ${dir === "rtl" ? "text-right" : ""}`}>
              <div className={`flex gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">{t("local.credentialsTitle")}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t("local.credentialsText")}</p>
                </div>
              </div>
            </article>

            <article className={`rounded-2xl bg-card border border-border/60 p-5 md:p-6 shadow-soft ${dir === "rtl" ? "text-right" : ""}`}>
              <div className={`flex gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-lg">{t("local.servicesTitle")}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t("local.servicesText")}</p>
                  <div className={`flex flex-wrap gap-2 mt-3 ${dir === "rtl" ? "justify-end" : ""}`}>
                    {services.map((service) => (
                      <span key={service} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className={`rounded-2xl bg-card border border-border/60 p-5 md:p-6 shadow-soft ${dir === "rtl" ? "text-right" : ""}`}>
              <div className={`flex gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-semibold text-lg">{t("local.locationTitle")}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t("local.locationText")}</p>
                  <a href={mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                    <Navigation className="w-4 h-4" />
                    {t("contact.getDirections")}
                  </a>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalDentalCare;
