import { useMemo } from "react";
import styles from "./TextBlock.module.css";

const TextBlock = ({ propBorder, propMixBlendMode }) => {
  const webbuilderStyle = useMemo(() => {
    return {
      border: propBorder,
      mixBlendMode: propMixBlendMode,
    };
  }, [propBorder, propMixBlendMode]);

  return (
    <div className={styles.textBlock}>
      <div className={styles.roboticAutomation}>
        <div className={styles.webbuilder} style={webbuilderStyle} />
        <div className={styles.wixpro72InchResponsiveContainer}>
          <b>WixPro 72-Inch Responsive Website Builder</b>
          <span>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </span>
        </div>
      </div>
      <div className={styles.text}>
        <b className={styles.mainHighlights}>Main highlights</b>
        <div className={styles.textFrame}>
          <div className={styles.whatYouGet}>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
