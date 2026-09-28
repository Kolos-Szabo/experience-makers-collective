# Raport de activitate 2025 — pagină nouă și integrare în site

## Ce se construiește

**1. Pagină nouă: `/raport-de-activitate-2025`**
- Deschidere: titlul „Raport de activitate 2025 — Programul Experience for All”, o fotografie reală din galerie, paragraful introductiv din raport.
- Partea „Parteneri”: textul primit spune doar că aici vor apărea siglele partenerilor, așa că afișez logourile partenerilor care sunt deja pe site. Nu adaug alte nume și nu las textul-substituent pe pagină.
- Cuprins cu link-uri către cele 18 activități și către „Concluzii și mulțumiri”. Pe calculator rămâne vizibil în lateral cât derulezi, iar pe telefon apare ca o listă care se deschide la apăsare.
- Cele 18 activități, în ordinea din raport. Fiecare are număr, titlu, dată și locul (când apar în text), iar paragrafele sunt aerisite. Pe margine apare discret un buton „Înapoi la cuprins”.
- Fotografii din galeria existentă, doar unde se potrivesc clar (de exemplu scufundări, înot, escaladă, off-road, căruța, tabăra). Unde nu există o fotografie potrivită, activitatea apare fără imagine. Nu repet aceeași fotografie.
- „Concluzii și mulțumiri” are un fundal separat, în culorile site-ului, și textul complet, fără adăugiri.
- Nu apar cifre, grafice sau citate care nu sunt în raport.

**2. Prima pagină:** o secțiune nouă imediat după videoclip, cu o fotografie, prima frază din raport și butonul „Citește raportul de activitate 2025”.

**3. Meniu și subsol:** un link „Raport 2025” în grupul potrivit din meniu (lângă Impact/Transparență) și în subsol.

**4. Alte pagini:** câte un link scurt pe paginile Impact și Transparență, unde raportul completează informația.

## Textul
Folosesc textul lipit de tine, aproape neschimbat: corectez doar discret greșelile de scriere și punctuație.

## Detalii tehnice
- Conținutul stă într-un fișier de date separat, cu activitățile, datele, paragrafele și cheia fotografiei (opțională). Pagina doar îl afișează.
- Pagina are titlu, descriere și previzualizare proprii când e distribuită, plus adresa principală a paginii. O adaug și în lista paginilor generate pentru GitHub Pages, ca să fie publicată pe experienceforall.ro.
- Refolosesc elementele existente ale site-ului (secțiuni, animația de apariție, logourile partenerilor, butoanele) și cele 4 culori ale identității.
- Verificare: compilarea trece, apoi testez cu Playwright pe calculator și pe telefon (cuprinsul, cele 18 secțiuni, link-urile, fără derulare laterală).
