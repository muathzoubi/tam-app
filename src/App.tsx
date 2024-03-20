import './App.css';
import Coursol from './crl';

function App() {
  return (
    <>
      <div className="landing-page" dir="rtl">
        <header>
          <div className="container" dir="rtl">
            <a href="#" className="logo">
              <b><img src="https://i.ibb.co/7JQwFKH/removebg-preview.png" width={90}/></b>
            </a>
            <ul className="links">
              <li>الرئيسية</li>
              <li>من نحن</li>
              <li>معلومات</li>
              <li>اشتر الأن</li>
            </ul>
          </div>
        </header>
        <div style={{ height: '50%', margin: 4 }}>
          <Coursol />
        </div>
        <div className="content">
          <div className="container">
          
            <div className="image">
              <img
              style={{borderRadius:5}} 
              src="https://i.ibb.co/5xxqbkd/Presentation-created-from-your-Doc.png" />
            </div>
            <div className="info">
              <h2>أسهل تأمين أونلاين للسيارات</h2>
              <p>
                شركة رائدة في مجال التأمين متعدد الخطوط في المنطقة. حيث تُقدم
                قيمة فائقة لعملائها، وتحقق مكاسب مستدامة ومربحة للمساهمين فيها.
                الغاية الأساسية للشركة هي غرس الثقة في قلوب الناس ليعيشوا الحياة
                التي يتطلعون إليها والتحضير بشكل جيد لما قد يكون غير متوقع.
                تتجاوز رؤية الشركة للتأمين التقليدي من خلال إنشاء نظام بيئي يضع
                العميل في صميم اهتماماتها
              </p>
              <button>اشتر الان</button>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
          <div className="image">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png" />
            </div>
            <div className="info">
              <h2>تأمين السيارات</h2>
              <p>
                أصلاح الوكالة، القيادة في كافة دول مجلس التعاون الخليجي، تأجير
                السيارات المؤقت عندما يتعلق الأمر بأختيار خطة التأمين المناسبة،
                يعتمد ذلك بطبيعة الحال على متطلبات كل فرد وهو ما يجعله يختار
                حلول مختلفة تعتمد جميعها على احتياجاته وأسلوب حياته. لذا، قمنا
                بتسهيل اختيار بوليصة التأمين الأنسب لك من خلال منحك حرية
                الأختيار. أكشف المزايا التالية واحصل على خطة التأمين التي
                تفضلها.
              </p>
              <button>اشتر الان</button>
            </div>
            
          </div>
        </div>
        <footer>
          <div
            className="container green borderXwidth"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 0,
                color: '#fff',
              }}
            >
              <a>الرئيسية</a>
              <a>معلومات</a>
              <a>من نحن</a>
            </div>

            <div
              style={{ display: 'flex', justifyContent: 'center', padding: 0 }}
            >
              <img
                style={{ margin: 2 }}
                src="https://i.ibb.co/278f7Y9/footer-vision-logo.png"
                height={35}
              />
              <img
                style={{ margin: 2 }}
                src="https://i.ibb.co/3pWwWpL/logo.png"
                alt="logo"
                height={35}
              />
            </div>
          </div>
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 25,
              justifyItems: 'end',
              fontSize: 'small',
              color: '#fff',
            }}
          >
             © جميع الحقوق محفوظة لشركة فايدي للتأمين     </span>
        </footer>
      </div>
    </>
  );
}

export default App;
