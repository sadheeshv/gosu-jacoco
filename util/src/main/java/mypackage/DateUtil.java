package mypackage;

import org.apache.commons.lang.time.DateFormatUtils;

import java.util.Date;

/**
 * Created by svenkatachalam on 3/7/17.
 */
public class DateUtil {
    public static String getToday() {
        String today = DateFormatUtils.format(new Date(), "dd-MMM-yyyy");
        return today;
    }
}
