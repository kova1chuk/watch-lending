import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Політика конфіденційності</Title>
      <Paragraph>
        Захист особистих даних. Для захисту ваших особистих даних у нас
        запроваджено ряд засобів захисту, які діють при введенні, передачі або
        роботі з вашими особистими даними.
      </Paragraph>
      <Paragraph>
        Розголошення особистих відомостей і передача цих відомостей третім
        особам. Ваша особиста інформація може бути розголошена нами тільки в
        тому випадку, якщо це необхідно для:
        <ol>
          <li>
            забезпечення відповідності розпорядженням закону або вимогам
            судового процесу в нашому ставленні;
          </li>
          <li>захисту своїх прав або власності;</li>
          <li>
            вживання термінових заходів щодо забезпечення особистої безпеки
            наших співробітників або споживачів їхніх послуг, а також
            забезпечення громадської безпеки.
          </li>
        </ol>
        Особисті відомості, отримані в наше розпорядження при реєстрації, можуть
        передаватися третім організаціям та особам, які перебувають з нами в
        партнерських відносинах для поліпшення якості послуг, що надаються. Ці
        відомості не будуть використовуватися в будь-яких інших цілях, крім
        перерахованих вище.
      </Paragraph>
      <Paragraph>
        Адреса електронної пошти, надана вами при реєстрації, може
        використовуватися для відправки вам повідомлень або повідомлень про
        зміни, пов&apos;язані з вашою заявкою, а також розсилки повідомлень про
        події в компанії події та зміни, важливої ​​інформації про нові товари і
        послуги тощо. Передбачена можливість відмови від підписки на ці поштові
        повідомлення.
      </Paragraph>
      <Paragraph>
        Використання файлів «cookie». Коли користувач відвідує веб-вузол, на
        його комп&apos;ютер записується файл «cookie» (якщо користувач дозволяє
        прийом таких файлів). Якщо ж користувач уже відвідував даний веб-вузол,
        файл «cookie» зчитується з комп&apos;ютера. Один з напрямків
        використання файлів «cookie» пов&apos;язане з тим, що з їх допомогою
        полегшується збір статистики відвідування. Ці відомості допомагають
        визначати, яка інформація, що відправляється замовникам, може
        представляти для них найбільший інтерес. Збір цих даних здійснюється в
        узагальненому вигляді і ніколи не співвідноситься з особистими
        відомостями користувачів.
      </Paragraph>
      <Paragraph>
        Треті сторони, включаючи компанії Google, показують оголошення нашої
        компанії на сторінках сайтів в Інтернеті. Треті сторони, включно з
        організацією Google, використовують cookie, щоб показувати оголошення,
        засновані на попередніх відвідуваннях користувачем наших веб-сайтів і
        інтересах в веб-браузерах. Користувачі можуть заборонити компаніям
        Google використовувати cookie. Для цього необхідно відвідати спеціальну
        сторінку компанії Google за цією адресою:{" "}
        <Link href="http://www.google.com/privacy/ads/">
          http://www.google.com/privacy/ads/
        </Link>
      </Paragraph>
      <Paragraph>
        Зміни в заяві про дотримання конфіденційності. Заява про дотримання
        конфіденційності передбачається періодично оновлювати. При цьому буде
        змінюватися дата попереднього поновлення, зазначена на початку
        документа. Повідомлення про зміни в даній заяві будуть розміщуватися на
        видному місці наших веб-вузлів.
      </Paragraph>
      <Paragraph>
        Здійснивши замовлення на нашому сайті будь-якого товару, Ви погоджуєтесь
        отримати смс-повідомлення про доставку купленого Вами товару в
        відповідне поштове відділення, згідно із зазначеним вами індексу.
      </Paragraph>
      <Paragraph>Дякуємо Вам за проявлений інтерес до нашої системи!</Paragraph>
    </div>
  );
};

export default PrivacyPolicy;
