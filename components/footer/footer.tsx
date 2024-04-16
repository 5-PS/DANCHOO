import Image from 'next/image';
import Link from 'next/link';

import emailLogo from '@/public/icons/email.svg';
import facebookLogo from '@/public/icons/facebook.svg';
import instagramLogo from '@/public/icons/instagram.svg';

const SOCIAL_MEDIA_LINKS = Object.freeze([
  { href: '/', src: emailLogo, alt: 'email icon' },
  { href: '/', src: facebookLogo, alt: 'facebook icon' },
  { href: '/', src: instagramLogo, alt: 'instagramLogo icon' },
]);

function Footer() {
  return (
    <footer className="w-full h-[126px] md:h-[100px] justify-center items-center flex bg-gray-10 p-5  md:p-8">
      <div className="flex justify-between w-full xl:max-w-[964px] mt-2 md:mt-0">
        <div className="flex flex-col-reverse justify-between gap-10 md:gap-0 md:flex-1 md:flex-row">
          <div className="md:flex-1">© 5PS - 2024</div>
          <div className="flex md:flex-1 gap-[30px]">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <ul className="flex gap-[10px] justify-end">
          {SOCIAL_MEDIA_LINKS.map((link) => (
            <li key={link.alt}>
              <Link href={link.href}>
                <Image src={link.src} alt={link.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
