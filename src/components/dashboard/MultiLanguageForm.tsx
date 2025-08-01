"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  LANGUAGES,
  LANGUAGE_FLAGS,
  Language,
  MultiLanguageField,
} from "@/types";

interface MultiLanguageFormProps {
  titleValue?: MultiLanguageField;
  descriptionValue?: MultiLanguageField;
  onTitleChange: (lang: Language, value: string) => void;
  onDescriptionChange: (lang: Language, value: string) => void;
  titleErrors?: Partial<Record<Language, string>>;
  descriptionErrors?: Partial<Record<Language, string>>;
}

export function MultiLanguageForm({
  titleValue,
  descriptionValue,
  onTitleChange,
  onDescriptionChange,
  titleErrors = {},
  descriptionErrors = {},
}: MultiLanguageFormProps) {
  const [activeLanguage, setActiveLanguage] = useState<Language>("en");

  return (
    <div className="space-y-6">
      <Tabs
        value={activeLanguage}
        onValueChange={(value) => setActiveLanguage(value as Language)}
      >
        <TabsList className="grid w-full grid-cols-3">
          {Object.entries(LANGUAGES).map(([code, name]) => {
            const lang = code as Language;
            const hasError = titleErrors[lang] || descriptionErrors[lang];
            return (
              <TabsTrigger
                key={code}
                value={code}
                className={`flex items-center gap-2 ${
                  hasError ? "text-destructive" : ""
                }`}
              >
                <span>{LANGUAGE_FLAGS[lang]}</span>
                {name}
                {hasError && (
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.keys(LANGUAGES).map((code) => {
          const lang = code as Language;
          return (
            <TabsContent key={code} value={code} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`title-${lang}`}>
                  Title ({LANGUAGES[lang]})
                </Label>
                <Input
                  id={`title-${lang}`}
                  defaultValue={titleValue?.[lang] || ""}
                  onChange={(e) => onTitleChange(lang, e.target.value)}
                  placeholder={`Enter title in ${LANGUAGES[lang]}`}
                  className={titleErrors[lang] ? "border-destructive" : ""}
                />
                {titleErrors[lang] && (
                  <p className="text-sm text-destructive">
                    {titleErrors[lang]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`description-${lang}`}>
                  Description ({LANGUAGES[lang]})
                </Label>
                <Textarea
                  id={`description-${lang}`}
                  defaultValue={descriptionValue?.[lang] || ""}
                  onChange={(e) => onDescriptionChange(lang, e.target.value)}
                  placeholder={`Enter description in ${LANGUAGES[lang]}`}
                  rows={4}
                  className={
                    descriptionErrors[lang] ? "border-destructive" : ""
                  }
                />
                {descriptionErrors[lang] && (
                  <p className="text-sm text-destructive">
                    {descriptionErrors[lang]}
                  </p>
                )}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
