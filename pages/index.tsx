import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
      <>
          <div className={styles['bg-top-container']} >
            <img src="/images/bg-pattern-top-mobile.svg" alt="Mobile top background pattern" className={styles["bg-top-mobile"]} />
            <img src="/images/bg-pattern-top-desktop.svg" alt="Desktop top background pattern" className={styles["bg-top-desktop"]} />
          </div>

          <div className={styles.container}>
              <header className={styles.header}>
                  <h1 className={styles.heading}>10,000+ of our users love our products.</h1>
                  <h2 className={styles['sub-heading']}>
                      We only provide great products combined with excellent customer service.
                      See what our satisfied customers are saying about our services.
                  </h2>
              </header>

              <aside className={styles.aside}>
                  <div className={styles.rating}>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <span className={styles.rating__text}>Rated 5 Stars in Reviews</span>
                  </div>

                  <div className={styles.rating}>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <span className={styles.rating__text}>Rated 5 Stars in Report Guru</span>
                  </div>

                  <div className={styles.rating}>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <img src="/images/icon-star.svg" alt="Star Icon"/>
                      <span className={styles.rating__text}>Rated 5 Stars in BestTech</span>
                  </div>
              </aside>

              <main className={styles.main}>
                  <div className={styles.testimony}>
                      <div className={styles.testimony__header}>
                          <img
                              className={styles['testimony__author-img']}
                              src="/images/image-colton.jpg"
                              alt="Colton Smith"
                          />
                          <span className={styles['testimony__author-name']}>Colton Smith</span>
                          <span className={styles['testimony__author-title']}>Verified Buyer</span>
                      </div>
                      <div className="testimony__body">
                          "We needed the same printed design as the one we had ordered a week
                          prior. Not only did they find the original order, but we also received
                          it in time. Excellent!"
                      </div>
                  </div>

                  <div className={styles.testimony}>
                      <div className={styles.testimony__header}>
                          <img
                              className={styles['testimony__author-img']}
                              src="/images/image-irene.jpg"
                              alt="Colton Smith"
                          />
                          <span className={styles['testimony__author-name']}>Irene Roberts</span>
                          <span className={styles['testimony__author-title']}>Verified Buyer</span>
                      </div>
                      <div className="testimony__body">
                          "Customer service is always excellent and very quick turn around.
                          Completely delighted with the simplicity of the purchase and the speed
                          of delivery."
                      </div>
                  </div>

                  <div className={styles.testimony}>
                      <div className={styles.testimony__header}>
                          <img
                              className={styles['testimony__author-img']}
                              src="/images/image-anne.jpg"
                              alt="Colton Smith"
                          />
                          <span className={styles['testimony__author-name']}>Anne Wallace</span>
                          <span className={styles['testimony__author-title']}>Verified Buyer</span>
                      </div>
                      <div className="testimony__body">
                          "Put an order with this company and can only praise them for the very
                          high standard. Will definitely use them again and recommend them to
                          everyone!"
                      </div>
                  </div>
              </main>

          </div>

          <div className={styles['bg-bottom-container']} >
              <img src="/images/bg-pattern-bottom-mobile.svg" alt="Mobile bottom background pattern" className={styles["bg-bottom-mobile"]} />
              <img src="/images/bg-pattern-bottom-desktop.svg" alt="Desktop bottom background pattern"  className={styles["bg-bottom-desktop"]} />
          </div>
      </>
    );
}
