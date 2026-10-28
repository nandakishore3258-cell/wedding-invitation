export type Language = 'en' | 'te' | 'kn';

export interface WeddingEvent {
  id: string;
  titleKey: string;
  dateStr: {
    en: string;
    te: string;
    kn: string;
  };
  timeStr: {
    en: string;
    te: string;
    kn: string;
  };
  lagnam?: {
    en: string;
    te: string;
    kn: string;
  };
  startIso: string; // ISO string for calendar
  endIso: string;
  location: string;
  description: {
    en: string;
    te: string;
    kn: string;
  };
}

export interface FamilyAddress {
  familyTitle: {
    en: string;
    te: string;
    kn: string;
  };
  name: {
    en: string;
    te: string;
    kn: string;
  };
  addressLines: {
    en: string[];
    te: string[];
    kn: string[];
  };
  pincode: string;
  phone?: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      salutation: { en: string; te: string; kn: string };
      name: { en: string; te: string; kn: string };
      qualification: string;
      father: { en: string; te: string; kn: string };
      mother: { en: string; te: string; kn: string };
      grandParentsBlessings: { en: string; te: string; kn: string };
      village: { en: string; te: string; kn: string };
      mandal: { en: string; te: string; kn: string };
      district: { en: string; te: string; kn: string };
      state: { en: string; te: string; kn: string };
      pincode: string;
    };
    bride: {
      salutation: { en: string; te: string; kn: string };
      name: { en: string; te: string; kn: string };
      qualification: string;
      father: { en: string; te: string; kn: string };
      mother: { en: string; te: string; kn: string };
      village: { en: string; te: string; kn: string };
      taluk: { en: string; te: string; kn: string };
      district: { en: string; te: string; kn: string };
      state: { en: string; te: string; kn: string };
      pincode: string;
    };
  };
  events: {
    reception: WeddingEvent;
    muhurtham: WeddingEvent;
  };
  venue: {
    name: { en: string; te: string; kn: string };
    city: { en: string; te: string; kn: string };
    state: { en: string; te: string; kn: string };
    fullDisplay: { en: string; te: string; kn: string };
    googleMapsUrl: string;
  };
  bestCompliments: {
    family: { en: string; te: string; kn: string };
  };
  invitationFrom: {
    en: string;
    te: string;
    kn: string;
  };
  addresses: {
    groom: FamilyAddress;
    bride: FamilyAddress;
  };
  countdownTargetIso: string; // 2026-11-29T09:00:00+05:30
}

export interface RsvpEntry {
  id: string;
  guestName: string;
  phone: string;
  attending: 'both' | 'muhurtham' | 'reception' | 'cannot';
  guestCount: number;
  wishes: string;
  createdAt: string;
}
