# Uyarlama notu

Bu depo, **lipsumation** tarafından geliştirilen *Psikofarmakoloji Rehberi*'nin uyarlamasıdır.

**Bu uyarlamanın canlı sürümü:** https://hypothermia15.github.io/psikofarmarehber/

| | |
|---|---|
| **Özgün çalışma** | Psikofarmakoloji Rehberi, © 2026 lipsumation |
| **Özgün depo** | https://github.com/lipsumation/psikofarmarehber |
| **Özgün canlı sürüm** | https://lipsumation.github.io/psikofarmarehber/ |
| **Temel alınan özgün sürüm** | `ee60e63` (12 Kasım 2026) |
| **Uyarlayan** | Doç. Dr. Miraç Barış Usta, https://miracbarisusta.com |
| **Lisans** | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.tr); özgün çalışmayla aynı lisans. Tam metin: [LICENSE](LICENSE) |

Özgün yazar bu uyarlamayı onaylamış ya da desteklemiş değildir. Uyarlamada yapılan değişikliklerin sorumluluğu uyarlayana aittir.

## Yapılan değişiklikler

**13 Kasım 2026**

- Uygulamanın alt bilgisine kaynak, lisans ve uyarlayan bildirimi eklendi.
- Üst barda, marka adının ve hasta grubu seçicisinin altına uyarlayan satırı eklendi.
- İlk açılış: hasta grubu daha önce seçilmemişse rehber çocuk-ergen görünümüyle açılır ve karşılama penceresi gösterilmez. Erişkin görünümü üst bardaki seçiciden ya da bağlantıya `?kitle=eri` eklenerek açılır; tasarım, üst bardaki tasarım düğmesinden seçilir.
- Telefon görünümü: ana sayfadaki dört adımlı süreç şeridi 520 pikselin altında iki sütuna iner (taşma giderildi); klinik içerik değişmedi. Önbellek için dosya sürümü `v=15` yapıldı.
- README'nin başına uyarlama bildirimi eklendi; bu dosya oluşturuldu.
- Yayın: Site GitHub Pages ile `main` dalının kökünden yayınlanır. Özgün README'deki "Yayın" bölümü (`gh-pages` dalı) özgün depoya aittir; bu depoda `main` dalına gönderilen her değişiklik siteye yansır.

Klinik içerik (ilaç listesi, dozlar, titrasyon ve kesme şemaları, tetkik ve izlem, ilaç geçiş kuralları, metabolizma bilgileri ve Türkiye KÜB özetleri) özgün sürümle aynıdır; bu uyarlamada değiştirilmemiş ve ayrıca doğrulanmamıştır. Özgün uyarı metni korunmuştur.

## Özgün depodan güncelleme alma

Özgün depo düzenli olarak güncellenmektedir (doz ve KÜB düzeltmeleri dahil). Güncellemeler GitHub'da bu deponun sayfasındaki **Sync fork** düğmesiyle alınabilir. Komut satırından:

```bash
git remote add upstream https://github.com/lipsumation/psikofarmarehber.git   # yalnızca ilk seferde
git fetch upstream
git merge upstream/main
git push origin main
```

Uyarlamaya ait değişiklikler `index.html` (üst bardaki satır ve stilleri, ilk açılış ayarı, alt bilgi), README'nin ilk paragrafı ve bu dosyayla sınırlı tutulmuştur; özgün depodaki düzeltmeler bu sayede büyük olasılıkla çakışmadan alınabilir. Yeni değişiklikler yukarıdaki listeye tarihiyle eklenmelidir.

## Lisans koşulları (özet)

- **Atıf:** Özgün yazar, özgün depo ve lisans bağlantısı korunmalı; yapılan değişiklikler belirtilmelidir.
- **Gayriticari:** Uyarlama ticari amaçla kullanılamaz.
- **Aynı lisansla paylaş:** Bu uyarlamadan türetilen çalışmalar da CC BY-NC-SA 4.0 ile paylaşılmalıdır.

Bağlayıcı olan, [LICENSE](LICENSE) dosyasındaki lisans metnidir.
