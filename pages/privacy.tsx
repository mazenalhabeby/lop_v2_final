import PolicyContentContainer from '@/components/policyContentContainer'
import TitleunderLine from '@/components/TitleunderLine'
import DefaultLayout from '@/layouts/DefaultLayout'

export default function privacy() {
  return (
    <div className=" pt-24 pb-12 w-full lg:w-4/5 mx-auto flex flex-col gap-10">
      <p>
        This page informs you of our policies regarding the collection, use and
        disclosure of personal information we receive from users of our site
        (https://leagueofpharaohs.com). We use your personal information to
        better understand your usage of the site, and to collect traffic
        statistics.
        <br />
        <br /> By using the site, you agree to the collection and use of
        information in accordance with this policy.
      </p>

      <PolicyContentContainer title="Log Data">
        <p>
          Like many site operators, we collect information that your browser
          sends whenever you visit our site ("Log Data"). This Log Data may
          include information such as your computer's Internet Protocol ("IP")
          address (with replaced last byte), browser type, browser version, the
          pages of our site that you visit, the time and date of your visit, the
          time spent on those pages and other statistics.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Cookies">
        <p>
          Cookies are files with a small amount of data, which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          web site and stored on your computer's hard drive. You can instruct
          your browser to refuse all cookies or to indicate when a cookie is
          being sent. However, if you do not accept cookies, you may not be able
          to use some portions of our site.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="We use cookies for the following purposes:">
        <p>
          To keep track of whether you have pressed the "OK" button on the
          cookie disclaimer, so we don't bother you with the notification if you
          have. Our Analytics software (Google Analytics) uses cookies to
          measure and better understand user-interactions on our Site. You can
          read more about how Google Analytics uses cookies here.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Links to Other Websites">
        <p>
          Our website contains links that lead to other websites. If you click
          on these links [name] is not held responsible for your data and
          privacy protection. Visiting those websites is not governed by this
          privacy policy agreement. Make sure to read the privacy policy
          documentation of the website you go to from our website.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Google Analytics">
        <p>
          We use a third-party JavaScript plug-in provided by Google called
          "Google Analytics" to provide us with useful traffic statistics and to
          better understand how you use our site. We do not have direct access
          to the information obtained from Google Analytics, but Google provides
          us with a summary through their dashboard.
          <br />
          <br /> We may share the information obtained from Google Analytics
          with business partners who are interested in advertising on our
          website. The information shared with these business partners will not
          contain any personally identifying information (Google does not
          provide us with direct access to the data and therefore we cannot see
          this information).
          <br />
          <br />
          You can opt-out of having your information collected by Google
          Analytics by downloading the Google Analytics opt-out browser add-on
          provided by Google. This will prevent your information being used by
          Google Analytics. Doing this will not affect your ability to use our
          Site in any way. You can download the opt-out browser add-on here. We
          also honor the Do Not Track header and will not track visitors who
          have Do Not Track switched on.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Changes to this Privacy Policy">
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on the Site. You
          are advised to review this privacy policy periodically for any
          changes.
          <br />
          <br />
          This Privacy Policy was last updated: 5th August, 2022.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Contact Us">
        <p>
          If you have any questions about our privacy policy, or how your data
          is being collected and processed, please e-mail
          privacy@leagueofpharaohs.com.
          <br />
          <br />
          Like many site operators, we collect information that your browser
          sends whenever you visit our site ("Log Data"). This Log Data may
          include information such as your computer's Internet Protocol ("IP")
          address (with replaced last byte), browser type, browser version, the
          pages of our site that you visit, the time and date of your visit, the
          time spent on those pages and other statistics.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Why We Collect Your Data">
        <p>We are collecting your data for several reasons:</p>
        <ul className=" list-disc">
          <li>To better understand your needs.</li>
          <li>To improve our services and products.</li>
          <li>
            To send you promotional emails containing the information we think
            you will find interesting.
          </li>
          <li>
            To contact you to fill out surveys and participate in other types of
            market research.
          </li>
        </ul>
      </PolicyContentContainer>

      <PolicyContentContainer title="Restricting the Collection of your Personal Data">
        <p>
          At some point, you might wish to restrict the use and collection of
          your personal data. You can achieve this by doing the following:
          <br />
          <br />
          When you are filling the forms on the website, make sure to check if
          there is a box which you can leave unchecked, if you don't want to
          disclose your personal information.
          <br />
          <br />
          If you have already agreed to share your information with us, feel
          free to contact us via email and we will be more than happy to change
          this for you.
          <br />
          <br />
          [name] will not lease, sell or distribute your personal information to
          any third parties, unless we have your permission. We might do so if
          the law forces us. Your personal information will be used when we need
          to send you promotional materials if you agree to this privacy policy.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Things you do and information you provide.">
        <p>
          We collect the content and other information that you provide when you
          use our Services, including when you sign up for an account, create or
          share, and message or communicate with others. This can include
          information in or about the content that you provide, such as the
          location of a photo or the date a file was created. We also collect
          information about how you use our Services, such as the types of
          content you view or engage with or the frequency and duration of your
          activities.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Things others do and information they provide.">
        <p>
          We also collect content and information that other people provide when
          they use our Services, including information about you, such as when
          they share a photo of you, send a message to you or upload, sync or
          import your contact information.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Your networks and connections.">
        <p>
          We collect information about the people and groups you are connected
          to and how you interact with them, such as the people you communicate
          with the most or the groups you like to share with. We also collect
          contact information that you provide if you upload, sync or import
          this information (such as an address book) from a device.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Information about payments.">
        <p>
          If you use our Services for purchases or financial transactions (e.g.
          when you buy LOP on our website, make a purchase in a game), we
          collect information about the purchase or transaction. This includes
          your payment information and wallet, such as your credit or debit card
          number and other card information, and other account and
          authentication information, as well as billing, shipping and contact
          details.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Device information.">
        <p>
          We collect information from or about the computers, phones or other
          devices where you install or access our Services, depending on the
          permissions you've granted. We may associate the information we
          collect from your different devices, which helps us provide consistent
          Services across your devices. Here are some examples of the device
          information that we collect:
          <br />
          <br />
          Attributes such as the operating system, hardware version, device
          settings, file and software names and types, battery and signal
          strength, and device identifiers. Device locations, including specific
          geographic locations, such as through GPS, Bluetooth or WiFi signals.
          <br />
          <br />
          Connection information such as the name of your mobile operator or
          ISP, browser type, language and time zone, mobile phone number and IP
          address.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Information from websites and apps that use our Services.">
        <p>
          We collect information when you visit or use third-party websites and
          apps that use our Services (e.g. when they offer our Like button or
          Facebook Log In or use our measurement and advertising services). This
          includes information about the websites and apps that you visit, your
          use of our Services on those websites and apps, as well as information
          the developer or publisher of the app or website provides to you or
          us.
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Information from third-party partners.">
        <p>
          We receive information about you and your activities on and off
          Facebook from third-party partners, such as information from a partner
          when we jointly offer services or from an advertiser about your
          experiences or interactions with them..
        </p>
      </PolicyContentContainer>

      <PolicyContentContainer title="Facebook companies.">
        <p>
          We receive information about you from companies that are owned or
          operated by Facebook, in accordance with their terms and policies.
          Learn more about these companies and their privacy policies.
        </p>
      </PolicyContentContainer>
    </div>
  )
}

privacy.getLayout = DefaultLayout
