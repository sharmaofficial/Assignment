function getFontName(shortHand: string) {
    switch (shortHand) {
      case 'm-m':
        return `NotoSans-Medium`
        case 'm-sb':
          return `NotoSans-SemiBold`
          case 'm-r':
          return `NotoSans-Regular`
          case 'm-b':
          return `NotoSans-Bold`
      default:
        break;
    }
}

export {
  getFontName,
}