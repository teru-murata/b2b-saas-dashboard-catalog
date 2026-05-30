import type { Locale, LocaleOption } from "@/types/locale";

type LanguageSwitchProps = {
  activeLocale: Locale;
  label: string;
  optionLabel: (label: string, active: boolean) => string;
  options: LocaleOption[];
  onChange: (locale: Locale) => void;
};

export function LanguageSwitch({ activeLocale, label, optionLabel, options, onChange }: LanguageSwitchProps) {
  return (
    <div className="language-switch" aria-label={label}>
      {options.map((option) => {
        const active = option.locale === activeLocale;

        return (
          <button
            key={option.locale}
            type="button"
            aria-label={optionLabel(option.label, active)}
            aria-pressed={active}
            onClick={() => onChange(option.locale)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
