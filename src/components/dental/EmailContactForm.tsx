import { useState } from "react";
import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CLINIC_EMAIL = "dr.saleemo@gmail.com";

const EmailContactForm = () => {
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isPrepared, setIsPrepared] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${t("contact.emailSubject")}: ${formData.name.trim()}`;
    const body = [
      `${t("contact.formName")}: ${formData.name.trim()}`,
      `${t("contact.formEmail")}: ${formData.email.trim()}`,
      `${t("contact.formPhone")}: ${formData.phone.trim() || "—"}`,
      "",
      `${t("contact.formMessage")}:`,
      formData.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsPrepared(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    setIsPrepared(false);
  };

  const inputClassName = `w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${dir === "rtl" ? "text-right" : ""}`;

  return (
    <form onSubmit={handleSubmit} className={`rounded-2xl bg-card border border-border/50 p-4 md:p-5 shadow-soft ${dir === "rtl" ? "text-right" : ""}`}>
      <div className={`flex items-start gap-3 mb-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">{t("contact.formTitle")}</h3>
          <p className="text-sm text-muted-foreground">{t("contact.formDescription")}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className={`flex items-center gap-2 text-sm font-medium mb-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
            <User className="w-4 h-4 text-primary" />
            {t("contact.formName")}
          </span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className={inputClassName}
            placeholder={t("contact.formNamePlaceholder")}
          />
        </label>

        <label className="block">
          <span className={`flex items-center gap-2 text-sm font-medium mb-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
            <Mail className="w-4 h-4 text-primary" />
            {t("contact.formEmail")}
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={inputClassName}
            placeholder={t("contact.formEmailPlaceholder")}
          />
        </label>
      </div>

      <label className="block mt-3">
        <span className={`flex items-center gap-2 text-sm font-medium mb-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
          <Phone className="w-4 h-4 text-primary" />
          {t("contact.formPhone")}
        </span>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          className={inputClassName}
          placeholder={t("contact.formPhonePlaceholder")}
        />
      </label>

      <label className="block mt-3">
        <span className={`flex items-center gap-2 text-sm font-medium mb-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
          <MessageSquare className="w-4 h-4 text-primary" />
          {t("contact.formMessage")}
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          dir={dir}
          className={`${inputClassName} resize-y`}
          placeholder={t("contact.formMessagePlaceholder")}
        />
      </label>

      <Button type="submit" variant="teal" className={`w-full mt-4 gap-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
        <Send className="w-4 h-4" />
        {t("contact.formSubmit")}
      </Button>
      <p className={`text-xs text-muted-foreground mt-3 ${dir === "rtl" ? "text-right" : ""}`}>{isPrepared ? t("contact.formPrepared") : t("contact.formNote")}</p>
    </form>
  );
};

export default EmailContactForm;
