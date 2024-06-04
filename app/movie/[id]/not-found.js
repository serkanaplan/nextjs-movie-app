
import React from "react";
import styles from "./styles.module.css"; // CSS module kullanarak stilleri ayrıştırıyoruz

function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>NotFound</h1>
      <h2 className={styles.errorMessage}>Oops! Page Not Found</h2>
      <p className={styles.errorDescription}>
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <a href="/" className={styles.homeButton}>Go to Homepage</a>
    </div>
  );
};

export default NotFound;
