package com.fireside.chat;


import androidx.test.espresso.DataInteraction;
import androidx.test.espresso.ViewInteraction;
import androidx.test.filters.LargeTest;
import androidx.test.ext.junit.rules.ActivityScenarioRule;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;

import static androidx.test.InstrumentationRegistry.getInstrumentation;
import static androidx.test.espresso.Espresso.onData;
import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.Espresso.pressBack;
import static androidx.test.espresso.Espresso.openActionBarOverflowOrOptionsMenu;
import static androidx.test.espresso.action.ViewActions.*;
import static androidx.test.espresso.assertion.ViewAssertions.*;
import static androidx.test.espresso.matcher.ViewMatchers.*;

import com.fireside.chat.R;

import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;
import org.hamcrest.core.IsInstanceOf;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.hamcrest.Matchers.allOf;
import static org.hamcrest.Matchers.anything;
import static org.hamcrest.Matchers.is;

@LargeTest
@RunWith(AndroidJUnit4.class)
public class MainActivityTest {

    @Rule
    public ActivityScenarioRule<MainActivity> mActivityScenarioRule =
            new ActivityScenarioRule<>(MainActivity.class);

    @Test
    public void mainActivityTest() {
    ViewInteraction webView = onView(
allOf(withId(R.id.webview),
withParent(withParent(withId(android.R.id.content))),
isDisplayed()));
    webView.check(matches(isDisplayed()));
    
    ViewInteraction editText = onView(
allOf(withId(ui-sign-in-email-input), withText("martine+test@dowden.us"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    editText.check(matches(withText("martine+test@dowden.us")));
    
    ViewInteraction editText2 = onView(
allOf(withId(ui-sign-in-new-password-input),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    editText2.check(matches(isDisplayed()));
    
    ViewInteraction editText3 = onView(
allOf(withId(ui-sign-in-new-password-input), withText("••••••••••••••••••"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    editText3.check(matches(withText("••••••••••••••••••")));
    
    ViewInteraction editText4 = onView(
allOf(withId(ui-sign-in-new-password-input), withText("qbd3uh@ZEA@qmf4urb"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    editText4.check(matches(withText("qbd3uh@ZEA@qmf4urb")));
    
    ViewInteraction textView = onView(
allOf(withText("Chat Room"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    textView.check(matches(withText("Chat Room")));
    
    ViewInteraction editText5 = onView(
allOf(withText("Hello World"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    editText5.check(matches(withText("Hello World")));
    
    ViewInteraction textView2 = onView(
allOf(withText("Hello World"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    textView2.check(matches(withText("Hello World")));
    
    ViewInteraction editText6 = onView(
allOf(withText("lol"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    editText6.check(matches(withText("lol")));
    
    ViewInteraction textView3 = onView(
allOf(withText("\uD83D\uDE02"),
withParent(withParent(IsInstanceOf.<View>instanceOf(android.view.View.class))),
isDisplayed()));
    textView3.check(matches(withText("\uD83D\uDE02")));
    }
}
