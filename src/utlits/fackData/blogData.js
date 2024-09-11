import blog_img_7 from "../../assets/images/blog/blog-7.jpg"
import blog_img_8 from "../../assets/images/blog/blog-8.jpg"
import blog_img_9 from "../../assets/images/blog/blog-9.jpg"
import blog_img_10 from "../../assets/images/blog/blog-10.jpg"
import blog_img_11 from "../../assets/images/blog/blog-11.jpg"
import blog_img_12 from "../../assets/images/blog/blog-12.jpg"
import blog_img_13 from "../../assets/images/blog/blog-13.jpg"
import blog_img_14 from "../../assets/images/blog/blog-14.jpg"
import blog_img_15 from "../../assets/images/blog/blog-15.jpg"
import zerot from "../../assets/images/blog/zerot.png"
import yzblog from "../../assets/images/blog/yzblog.png"
import tedZin from "../../assets/images/blog/tedZin.png"
import bulutGuv from "../../assets/images/blog/bulutGuv.png"
import endustriyel from "../../assets/images/blog/endustriyel.png"
import sosyalmuh from "../../assets/images/blog/sosyalmuh.png"
import ransomwareBlog from "../../assets/images/blog/ransomwareBlog.png"

export const blogData = [
    {
        id: 1,
        title: "Zero Trust Güvenlik Yaklaşımı",
        thumb: zerot,
        date: "11 Eylül 2024",
        author: "Defend Zero",
        link: "blog-details",
        author_link:"/author",
        description:'Son yıllarda sıfır güven (Zero Trust) yaklaşımı, güvenlik politikalarında öne çıkan bir model haline geldi. Geleneksel güvenlik yaklaşımlarında, iç ağlar güvenilir kabul edilirken dış ağlar tehdit olarak algılanıyordu. Ancak, günümüzde saldırganlar iç ağlara sızmayı başardığında büyük zararlara yol açabiliyorlar. Zero Trust yaklaşımı, kullanıcıların ve cihazların her zaman doğrulanmasını ve sürekli izlenmesini öneriyor. Bu model, güvenliği sadece sınırlar içinde değil, her katmanda sağlamayı amaçlıyor. Zero Trust, bulut hizmetleri ve uzaktan çalışma gibi yeni teknolojilere uyum sağlamak için oldukça önemli bir adım olarak kabul ediliyor.'
    },
    {
        id: 2,
        title: "Yapay Zeka ile Gelişmiş Tehdit Algılama",
        thumb: yzblog,
        date: "11 Eylül 2024",
        author: "Defend Zero",
        link: "blog-details",
        author_link:"/author",
        description:'Yapay zeka (AI), siber güvenlik alanında devrim niteliğinde ilerlemeler sağladı. Özellikle siber saldırıların önceden tespit edilmesi ve saldırı kalıplarının tanımlanması için yapay zeka tabanlı sistemler kullanılmaya başlandı. Makine öğrenimi algoritmaları, geçmiş saldırı verilerini analiz ederek yeni tehditleri daha hızlı ve doğru bir şekilde tespit edebiliyor. Bu tür sistemler, özellikle karmaşık ve sürekli değişen tehditlerle mücadelede güvenlik uzmanlarına büyük bir avantaj sağlıyor. Ancak, saldırganlar da yapay zeka kullanarak daha gelişmiş saldırı teknikleri geliştiriyorlar. Bu nedenle, AI destekli savunma sistemlerinin sürekli güncellenmesi gerekiyor.'
    },
    {
        id: 3,
        title: "Tedarik Zinciri Saldırıları",
        thumb: tedZin,
        date: "10 Eylül 2024",
        author: "Defend Zero",
        link: "blog-details",
        author_link:"/author",
        description:'Son yıllarda giderek artan bir diğer tehdit ise tedarik zinciri saldırıları. Bu saldırılar, bir şirketin tedarik zincirinde yer alan üçüncü taraflar üzerinden yapılan siber saldırıları ifade eder. Örneğin, bir yazılım güncellemesi sırasında kötü amaçlı yazılım bulaştırılarak geniş çapta saldırılar gerçekleştirilebilir. 2020 yılında ortaya çıkan SolarWinds saldırısı, tedarik zinciri saldırılarının en büyük örneklerinden biri olarak tarihe geçti. Siber güvenlik uzmanları, tedarik zincirlerindeki zayıflıkları tespit edip koruma önlemlerini artırarak bu tür saldırılara karşı daha dikkatli olunması gerektiğini vurguluyor.'
    },
    {
        id: 4,
        title: "Siber Saldırılara Karşı Fidye Yazılımları (Ransomware)",
        thumb: ransomwareBlog,
        date: "10 Eylül 2024",
        author: "Defend Zero",
        link: "blog-details",
        author_link:"/author",
        description:'Fidye yazılım saldırıları, 2024 yılında da büyük bir tehdit olarak devam ediyor. Saldırganlar, hedef sistemleri şifreleyerek veya kilitleyerek kullanıcılardan fidye talep ediyor. Özellikle büyük ölçekli şirketler, sağlık sektöründeki hastaneler ve kamu kurumları, bu tür saldırıların en önemli hedefleri arasında yer alıyor. Çok faktörlü kimlik doğrulama (MFA), fidye yazılımlarına karşı alınabilecek önemli önlemlerden biri olarak gösteriliyor. Ayrıca, düzenli yedekleme ve şifreleme gibi güvenlik stratejileri de bu tür saldırılara karşı etkili olabilir.'
    },
    {
        id: 5,
        title: "Sosyal Mühendislik ve Kimlik Avı Saldırıları",
        thumb: sosyalmuh,
        date: "5 Eylül 2024",
        author: "Defend Zero",
        link: "blog-details",
        author_link:"/author",
        description:'Günümüzde siber saldırganlar, teknik güvenlik açıklarının ötesinde insanları hedef alan sosyal mühendislik saldırılarına daha fazla odaklanıyorlar. Kimlik avı (phishing) saldırıları, kullanıcıları kandırarak kişisel bilgilerini ele geçirmeyi amaçlayan bir yöntemdir. E-posta, SMS veya sahte web siteleri aracılığıyla kurbanlara ulaşan saldırganlar, kullanıcıların banka bilgileri, şifreleri gibi kritik bilgilerini çalmak için bu yöntemi kullanıyor. Farkındalık eğitimi ve güvenlik bilincini artırmak, sosyal mühendislik saldırılarına karşı en etkili savunmalardan biridir.'

    },
    {
        id: 6,
        title: "Bulut Güvenliği",
        thumb: bulutGuv,
        date: "5 Eylül 2024",
        author: "Defend Zero",
        author: "Admin",
        link: "blog-details",
        author_link:"/author",
        description:'Bulut tabanlı hizmetlerin artmasıyla birlikte bulut güvenliği de önemli bir konu haline geldi. Bulut ortamlarında verilerin güvenliği, erişim kontrolü ve veri şifreleme gibi önlemler büyük bir önem taşıyor. Saldırganlar, yanlış yapılandırılmış bulut ortamlarından faydalanarak büyük veri ihlalleri gerçekleştirebilirler. Ayrıca, bulut hizmeti sağlayıcılarının sunduğu güvenlik önlemlerinin yanı sıra, kullanıcıların da bu ortamlardaki güvenlik yapılandırmalarını sürekli denetlemeleri gerekiyor.'

    },
    {
        id: 7,
        title: "Kritik Altyapılar ve Endüstriyel Kontrol Sistemleri (ICS)",
        thumb: endustriyel,
        date: "5 Eylül 2024",
        author: "Defend Zero",
        link: "blog-details",
        author_link:"/author",
        description:'Enerji, su, ulaşım gibi kritik altyapılar, siber saldırıların hedefi haline gelmeye devam ediyor. Endüstriyel kontrol sistemleri (ICS) ve SCADA sistemleri gibi kritik altyapı bileşenleri, eski ve güncellenmemiş yazılımlar nedeniyle ciddi güvenlik açıklarına sahip olabiliyorlar. Bu sistemler, hem ulusal güvenlik hem de toplumun genel işleyişi açısından kritik öneme sahip olduğu için saldırılar büyük bir tehdit oluşturuyor. Özellikle devletler, kritik altyapıların korunmasına yönelik yatırımlarını artırmış durumda.'

    },
   
]