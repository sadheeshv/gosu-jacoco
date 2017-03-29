package mypackage;

import org.junit.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

import static junit.framework.TestCase.assertEquals;

/**
 * Created by svenkatachalam on 3/7/17.
 */
public class DateUtilTest {

    @Test
    public void testGetToday() {
        String actual = DateUtil.getToday();
        String expected = new SimpleDateFormat("dd-MMM-yyyy")
                .format(new Date());
        assertEquals(expected, actual);
    }
}
