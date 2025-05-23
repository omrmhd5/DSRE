"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Lock } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import Logo from "@/components/logo"

export default function Footer() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  return (
    <footer className={`py-16 border-t border-brand-gold/20 mt-16 ${isArabic ? "font-arabic text-right" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Logo variant="full" className="mb-4" />
          <p className="text-muted-foreground">
            {isArabic
              ? "نحن نبني مستقبلاً أفضل من خلال مشاريع سكنية مبتكرة ومستدامة."
              : "We're building a better future through innovative and sustainable residential projects."}
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-brand-gold transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-gold transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-gold transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-gold transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">{isArabic ? "روابط سريعة" : "Quick Links"}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-brand-gold transition-colors">
                {isArabic ? "الرئيسية" : "Home"}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-muted-foreground hover:text-brand-gold transition-colors">
                {isArabic ? "المشاريع" : "Projects"}
              </Link>
            </li>
            <li>
              <Link href="/media" className="text-muted-foreground hover:text-brand-gold transition-colors">
                {isArabic ? "المركز الإعلامي" : "Media Center"}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-brand-gold transition-colors">
                {isArabic ? "من نحن" : "About Us"}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-brand-gold transition-colors">
                {isArabic ? "اتصل بنا" : "Contact Us"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">{isArabic ? "المشاريع" : "Projects"}</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/projects?status=available-properties"
                className="text-muted-foreground hover:text-brand-gold transition-colors"
              >
                {isArabic ? "العقارات المتاحة" : "Available Properties"}
              </Link>
            </li>
            <li>
              <Link
                href="/projects?status=available-lands"
                className="text-muted-foreground hover:text-brand-gold transition-colors"
              >
                {isArabic ? "الأراضي المتاحة" : "Available Lands"}
              </Link>
            </li>
            <li>
              <Link
                href="/projects?status=coming"
                className="text-muted-foreground hover:text-brand-gold transition-colors"
              >
                {isArabic ? "المشاريع القادمة" : "Coming Soon"}
              </Link>
            </li>
            <li>
              <Link
                href="/projects?status=selling"
                className="text-muted-foreground hover:text-brand-gold transition-colors"
              >
                {isArabic ? "مشاريع للبيع" : "Projects for Sale"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">{isArabic ? "اتصل بنا" : "Contact Us"}</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-gold mt-0.5" />
              <span className="text-muted-foreground">
                {isArabic ? "شارع الملك فهد، الرياض، المملكة العربية السعودية" : "King Fahd Road, Riyadh, Saudi Arabia"}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-gold" />
              <span className="text-muted-foreground">+966 12 345 6789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-gold" />
              <span className="text-muted-foreground">info@developmentsolutions.com</span>
            </li>
            <li className="flex items-center gap-3 mt-6">
              <Lock className="w-5 h-5 text-brand-gold" />
              <Link href="/admin/login" className="text-muted-foreground hover:text-brand-gold transition-colors">
                {isArabic ? "لوحة الإدارة" : "Admin Dashboard"}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="elegant-divider my-8"></div>

      <div className={`text-center ${isArabic ? "font-arabic" : ""}`}>
        <p className="text-muted-foreground">
          {isArabic
            ? "© 2023 الحلول التطويرية العقارية. جميع الحقوق محفوظة."
            : "© 2023 Development Solutions Real Estate. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
