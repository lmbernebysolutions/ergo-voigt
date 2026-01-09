import { faqCategories } from "./faq";
import { services } from "./services";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

// 1. Get General FAQs
const generalCategories = faqCategories;

// 2. Get Service FAQs
// Create a sub-category for each service that has FAQs
const serviceSubCategories: FAQCategory[] = services
  .filter(s => s.faqs && s.faqs.length > 0)
  .map(s => ({
    id: s.id,
    label: s.title,
    items: s.faqs!.map(f => ({
      question: f.question,
      answer: f.answer,
      category: s.id
    }))
  }));

const serviceCategory: FAQCategory = {
  id: "therapieangebote",
  label: "Therapieangebote",
  items: [], // Empty because we use subCategories
  subCategories: serviceSubCategories
};

// Combine all
export const allFaqCategories: FAQCategory[] = [
  ...generalCategories,
  serviceCategory
];
