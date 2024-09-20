import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { AuthGuard } from '@/router/auth-guard'

/* Layouts */
import { AuthenticationLayout } from '@views/layouts/authentication'
import { PrivateLayout } from '@views/layouts/private'

/* Public routes */
import { LoginPage } from '@views/pages/login'
import { ResetPasswordPage } from '@views/pages/reset-password'
import { ForgotPasswordPage } from '@views/pages/forgot-password'
import { SignUpPage } from '@views/pages/sign-up'

/* Private routes */
import { AnnualReportPage } from '@views/pages/annual-report'
import { CashFlowPage } from '@views/pages/cash-flow'
import { CreateStudentPage } from '@views/pages/students/create-student'
import { FrequencyControlPage } from '@views/pages/frequency-control'
import { HomePage } from '@views/pages/home'
import { ProfilePage } from '@views/pages/profile'
import { SchedulePage } from '@views/pages/schedule'
import { StudentGoalsPage } from '@views/pages/student-goals'
import { StudentReportPage } from '@views/pages/student-report'
import { StudentsPage } from '@views/pages/students/index'
import { TeacherReportPage } from '@views/pages/teacher-report'
import { CreateTeacherPage } from '@views/pages/teachers/create-teacher'
import { TeachersPage } from '@views/pages/teachers/index'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Private Routes */}
				{/* <Route element={<AuthGuard isPrivate />}> */}
				<Route element={<PrivateLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/schedule" element={<SchedulePage />} />
					<Route path="/create-student" element={<CreateStudentPage />} />
					<Route path="/students" element={<StudentsPage />} />
					<Route path="/frequency-control" element={<FrequencyControlPage />} />
					<Route path="/student-goals" element={<StudentGoalsPage />} />
					<Route path="/create-teacher" element={<CreateTeacherPage />} />
					<Route path="/teachers" element={<TeachersPage />} />
					<Route path="/cash-flow" element={<CashFlowPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/annual-report" element={<AnnualReportPage />} />
					<Route path="/student-report" element={<StudentReportPage />} />
					<Route path="/teacher-report" element={<TeacherReportPage />} />
				</Route>

				{/* Public Routes */}
				<Route element={<AuthenticationLayout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<SignUpPage />} />
					<Route path="/forgot-password" element={<ForgotPasswordPage />} />
					<Route path="/reset-password" element={<ResetPasswordPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
