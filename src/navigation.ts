import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
// Η διεύθυνση email της Κοινότητας γράφεται σε ένα μόνο σημείο, το src/data/contact.json.
import contact from './data/contact.json';
// Οι σύνδεσμοι προς τη σελίδα των μελών εμφανίζονται μόνο όσο η σελίδα υπάρχει (βλ. utils/members.ts).
import { hasMembersPage } from './utils/members';

export const headerData = {
  links: [
    { text: 'Αρχική', href: getPermalink('/') },
    { text: 'Ανακοινώσεις', href: getBlogPermalink() },
    {
      text: 'Η Κοινότητα',
      links: [
        { text: 'Ιστορικό της Κοινότητας', href: getPermalink('/koinotita') },
        { text: 'Η ιστορία μας', href: getPermalink('/istoria') },
        { text: 'Καταστατικό', href: getPermalink('/katastatiko') },
        { text: 'Διοίκηση', href: getPermalink('/dioikisi') },
        { text: 'Κώδικας Δεοντολογίας', href: getPermalink('/kodikas-deontologias') },
      ],
    },
    hasMembersPage
      ? {
          text: 'Εγγραφή - Μέλη',
          links: [
            { text: 'Εγγραφή', href: getPermalink('/eggrafi') },
            { text: 'Μέλη', href: getPermalink('/meli') },
          ],
        }
      : { text: 'Εγγραφή', href: getPermalink('/eggrafi') },
    {
      text: 'Υλικό',
      links: [
        { text: 'Άρθρα', href: getPermalink('arthra', 'category') },
        { text: 'Εκδόσεις', href: getPermalink('/ekdoseis') },
        { text: 'Ορολογία', href: getPermalink('/orologia') },
        { text: 'Κανάλι YouTube', href: 'https://www.youtube.com/channel/UCUPii7aS3HQD7lyS6ncHUvQ', target: '_blank' },
      ],
    },
    { text: 'Επικοινωνία', href: getPermalink('/epikoinonia') },
  ],
  actions: [{ variant: 'primary' as const, text: 'Εγγραφή', href: getPermalink('/eggrafi') }],
};

export const footerData = {
  links: [
    {
      title: 'Η Κοινότητα',
      links: [
        { text: 'Η ιστορία μας', href: getPermalink('/istoria') },
        { text: 'Καταστατικό', href: getPermalink('/katastatiko') },
        { text: 'Διοίκηση', href: getPermalink('/dioikisi') },
        { text: 'Κώδικας Δεοντολογίας', href: getPermalink('/kodikas-deontologias') },
      ],
    },
    {
      title: 'Μέλη',
      links: [
        { text: 'Εγγραφή', href: getPermalink('/eggrafi') },
        ...(hasMembersPage ? [{ text: 'Κατάλογος μελών', href: getPermalink('/meli') }] : []),
      ],
    },
    {
      title: 'Υλικό',
      links: [
        { text: 'Ανακοινώσεις', href: getBlogPermalink() },
        { text: 'Άρθρα', href: getPermalink('arthra', 'category') },
        { text: 'Εκδόσεις', href: getPermalink('/ekdoseis') },
        { text: 'Ορολογία', href: getPermalink('/orologia') },
      ],
    },
    {
      title: 'Επικοινωνία',
      links: [
        { text: 'Φόρμα επικοινωνίας', href: getPermalink('/epikoinonia') },
        { text: contact.email, href: `mailto:${contact.email}` },
        { text: 'Ομάδα στο Facebook', href: 'https://www.facebook.com/groups/217347537745/' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Πολιτική απορρήτου', href: getPermalink('/aporrito') }],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/217347537745/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCUPii7aS3HQD7lyS6ncHUvQ' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  // Το υποσέλιδο του σάιτ είναι το components/ekas/EkasFooter.astro, αυτό το κείμενο δεν εμφανίζεται πουθενά.
  // Η έδρα δεν είναι πια στο Πάντειο (χρήστης, 2026-11-16), γι' αυτό δεν αναφέρεται διεύθυνση.
  footNote: `Ελληνική Κοινότητα Ανάλυσης Συμπεριφοράς, Αστική Μη Κερδοσκοπική Εταιρεία.`,
};
